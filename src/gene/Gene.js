import React from 'react';
import { 
    Input,
    Modal,
    Table,
} from 'antd';

import './styles/geneStyle.css';

import axios from 'axios';

import {TermAssocRow} from './components/TermAssocRow';
import {DiseaseAssocRow} from './components/DiseaseAssocRow';

const { Search } = Input;



const columns = [
    {
        title: 'db',
        dataIndex: 'db',
    },
    {
        title: 'diseaseName',
        dataIndex: 'diseaseName',
    },
    {
        title: 'diseaseId',
        dataIndex: 'diseaseId',
    },
    {
        title: 'dbId',
        dataIndex: 'dbId',
    },
  ];



class Gene extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            allData:{},
            termAssocArray:[],
            isLoading: false,
            diseaseAssocArray:[],
            geneText:{},
            genomicInfo: {},
            geneLocation: {},
            
        }
    }

    


    fetchData = () => {
        this.setState({isLoading:true}, ()=>{
            axios("http://161.189.10.25:4000/gene_information_by_omim_id?omim_id=100690")
                .then(res=>res.data)
                .then(data=>{
                    const allData = data;
                    const diseaseAssocArray = data.diseaseAssoc;
                    diseaseAssocArray.map(function(item){
                        item["key"]=item.db;})
                        console.log(diseaseAssocArray)
                    const termAssocArray = data.termAssoc;
                    const geneText = data.Gene_text;
                    const genomicInfo = data.genomicinfo[0];
                    const geneLocation= data.Gene_location;
                    // console.log(genomicInfo);
                    this.setState({ allData, genomicInfo, geneLocation, diseaseAssocArray, termAssocArray, geneText});
                } )   
                .catch(error=> console.error(error))
        })
        
        
    }
        
    // fecth data if input a disease ID 
    handleGeneSearch = value => {
        if (value.length <=0 ) {
            this.warning();
        }
        else{
            this.fetchData(value);
            }  
    }

    // the info popup box when inputing none 
    info = () => {
        Modal.info({
          title: '提示',
          content: (
            <div>
              <p>查询无结果, 请重新输入</p>
            </div>
          ),
          onOk() {},
        });
      }
      
    // the warning popup box when getting none results
     warning = ()  => {
        Modal.warning({
          title: '提示',
          content: '请输入后再查询',
        });
      }   

    render(){

        return (
            <div className='gene-main-part'>
                <Search
                    placeholder="请输入基因号"
                    onSearch={value => console.log(value)}
                    style={{ maxWidth: 600 }}
                    onSearch={this.handleGeneSearch}
                />
                <div style={{fontSize:'16px',lineHeight:'2'}}>
                    {/* OMIN ID */}
                    <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                        {this.state.allData.OMIM_id ? ' OMIM ID : ': ''}
                    </div>
                    <div>
                        {this.state.allData.OMIM_id}
                    </div>
                    {/* Entrez ID */}
                    <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                        {this.state.allData.entrez_id ? ' Entrez ID : ': ''}
                    </div>
                    <div>
                        {this.state.allData.entrez_id}
                    </div>
                    {/* gene_symbol */}
                    <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                        {this.state.allData.gene_symbol ? ' Gene Symbol : ': ''}
                    </div>
                    <div>
                        {this.state.allData.gene_symbol}
                    </div>
                    {/* otheraliases */}
                    <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                        {this.state.allData.otheraliases ? ' Other Aliases : ': ''}
                    </div>
                    <div>
                        {this.state.allData.otheraliases}
                    </div>
                    {/* maplocation */}
                    <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                        {this.state.allData.maplocation ? ' Map Location : ': ''}
                    </div>
                    <div>
                        {this.state.allData.maplocation}
                    </div>
                    {/* gene_summary */}
                    <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                        {this.state.allData.gene_summary ? ' Gene Summary : ': ''}
                    </div>
                    <div>
                        {this.state.allData.gene_summary}
                    </div>
                    {/* genomicinfo */}
                    <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                        {JSON.stringify(this.state.genomicInfo) !== "{}" ? ' Genomic Info : ': ''}
                    </div>
                    <div>
                        {this.state.genomicInfo.chraccver ? ' chraccver : ': ''}
                        {this.state.genomicInfo.chraccver}
                    </div>
                    <div>
                        {this.state.genomicInfo.exoncount ? 'exoncount : ': ''}
                        {this.state.genomicInfo.exoncount}
                    </div>
                    <div>
                        {this.state.genomicInfo.chrstop ? ' chrstop : ': ''}
                        {this.state.genomicInfo.chrstop}
                    </div>
                    <div>
                        {this.state.genomicInfo.chrstart ? ' chrstart : ': ''}
                        {this.state.genomicInfo.chrstart}
                    </div>
                    <div>
                        {this.state.genomicInfo.chrloc ? ' chrloc : ': ''}
                        {this.state.genomicInfo.chrloc}
                    </div>
                    {/* entrezGeneSymbol */}
                    <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                        {this.state.allData.entrezGeneSymbol ? ' Entrez Gene Symbol : ': ''}
                    </div>
                    <div>
                        {this.state.allData.entrezGeneSymbol}
                    </div>
                    {/* entrezGeneId */}
                    <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                        {this.state.allData.entrezGeneId ? ' Entrez Gene Id : ': ''}
                    </div>
                    <div>
                        {this.state.allData.entrezGeneId}
                    </div>
                    {/* Gene_location */}
                    <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                        {JSON.stringify(this.state.Gene_location) !== "{}" ? ' Gene Location : ': ''}
                    </div>
                    <div>
                        {this.state.geneLocation[this.state.allData.gene_symbol]? ' Cytogenetic location : ': ''}
                        {/* {this.state.Gene_location["this.state.allData.gene_symbol"]["Cytogenetic location"]} */}
                    </div>


                    {/* Disease Association 表格 */}
                    <div style={{color:'#2780d3',fontSize:"21px", fontWeight:"bold",marginTop:'30px',marginBottom:'25px'}}>
                        {this.state.diseaseAssocArray.length!==0 ? ' Disease Association ': ''}
                    </div>
                    {this.state.diseaseAssocArray.length!==0 ?             
                        <Table 
                            columns={columns} 
                            pagination={false}
                            dataSource={this.state.diseaseAssocArray} 
                        />
                        : ''
                    }
                    <div style={{color:'#2780d3',fontSize:"21px", fontWeight:"bold",marginTop:'30px',marginBottom:'25px'}}>
                        {this.state.termAssocArray.length!==0 ? ' Term Association ': ''}
                    </div>
                        {this.state.termAssocArray.map(term=>{
                            return (
                            <TermAssocRow
                            key= {term.ontologyId}
                            definition={term.definition}
                            name = {term.name}
                            ontologyId = {term.ontologyId}
                            />)
                        } )}
                </div>
                    
                {/* <div style={{fontSize:'16px',lineHeight:'2'}}>
                    <div style={{color:'#2780d3',fontSize:"21px", fontWeight:"bold",marginTop:'30px',marginBottom:'25px'}}>
                        {JSON.stringify(this.state.geneText)!== '{}' ? ' Gene Text ': ''}
                    </div>
                    <div style={{color:'#2780d3',fontSize:"21px", fontWeight:"bold",marginTop:'30px',marginBottom:'25px'}}>
                        {this.state.geneText["Molecular Genetics"]!== undefined ? ' Molecular Genetics ': ''}
                    </div>
                </div> */}
           
                    
    
            </div>
        
        )}
            
               
        }


export default Gene;