import React from 'react';
import {Link} from 'react-router-dom';

import { 
    Input,
    Modal,
    Table,
    Layout,
    Menu,
    Radio,
} from 'antd';

import {CaretRightOutlined} from '@ant-design/icons';

import './styles/geneStyle.css';

import axios from 'axios';
import {TermAssocRow} from './components/TermAssocRow';

const { SubMenu } = Menu;
const { Search } = Input;
const { Sider } = Layout;


const diseaseAssocColumns = [
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


const geneVarientColumns = [
    {
        title: 'Variant',
        dataIndex: 'Variant',
    },
    {
        title: 'Disease',
        dataIndex: 'Disease',
    },
    {
        title: 'SNP',
        dataIndex: 'SNP',
    },
    {
        title: 'gnomAD',
        dataIndex: 'gnomAD',
    },
    {
        title: 'ClinVar',
        dataIndex: 'ClinVar',
    },
];


class Gene extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            allData:{},
            termAssocArray:[],
            diseaseAssocArray:[],
            geneVarientArray:[],
            geneText:{},
            genomicInfo: {},
            geneLocation: {},
            isLoading: false,
            url:"http://161.189.10.25:4000/gene_information_by_omim_id?omim_id=",
        }
    }

    handleSearchCondition = event => {
        if(event.target.value==="omim_id"){
             this.setState({ url :"http://161.189.10.25:4000/gene_information_by_omim_id?omim_id="})
        }else if(event.target.value==="entrez_id"){
            this.setState({url:"http://161.189.10.25:4000/gene_information_by_entrez_id?entrez_id="})
        }
    }


    fetchData = (value) => {
        this.setState({isLoading:true}, ()=>{
            const newUrl= this.state.url;
            console.log(newUrl);
            axios(`${newUrl}${value}`)
            // axios("http://mock-api.com/vKVpN6g8.mock/gene")
                .then(res=>res.data)
                .then(data=>{
                    const allData = data;
                    const diseaseAssocArray = data.diseaseAssoc;
                    const geneVarientArray = data.Gene_variant;
                    // add the key for each elemeent in diseaseAssoc array
                    diseaseAssocArray.map(item=>{
                        item["key"]=item.db})
                    console.log(diseaseAssocArray)
                    // add the key for each elemeent in geneVarient array
                    geneVarientArray.map(item=>{
                        item["key"]=item.Variant})
                    console.log(geneVarientArray)
                    const termAssocArray = data.termAssoc;
                    const geneText = data.Gene_text;
                    const genomicInfo = data.genomicinfo[0];
                    const geneLocation= data.Gene_location[data.gene_symbol];
                    this.setState({ allData, genomicInfo, geneLocation, diseaseAssocArray, termAssocArray, geneVarientArray, geneText});
                    this.setState({isLoading:false})
                } )
                .catch(error=> {
                    console.error(error);
                    this.setState({isLoading:false})
                })
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
            <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
      
            <Sider className="site-layout-background" width={200}>
            {/* 搜索有结果后才显示 */}
            {JSON.stringify(this.state.allData) !== "{}" ?
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ height: '100%' }}
            >
                    {this.state.allData.OMIM_id?                 
                    <Menu.Item>
                        <a href='#OMIM_id'>OMIM Id</a>
                    </Menu.Item>
                :""}
                {this.state.allData.entrez_id?
                    <Menu.Item >
                        <a href='#entrez_id'>Entrez Id</a>
                    </Menu.Item>
                :""}
                {this.state.allData.gene_symbol?
                    <Menu.Item key="">
                        <a href='#gene_symbol'>Gene Symbol</a>
                    </Menu.Item>
                :""}
                {this.state.allData.otheraliases?
                    <Menu.Item key="">
                        <a href='#otheraliases'>Other Aliases</a>
                    </Menu.Item>
                :""}
                {this.state.allData.maplocation?
                    <Menu.Item key="">
                        <a href='#maplocation'>Map Location</a>
                    </Menu.Item>
                :""}
                {this.state.allData.gene_summary?
                    <Menu.Item>
                        <a href='#gene_summary'>Gene Summary</a>
                    </Menu.Item>
                :""}
                {JSON.stringify(this.state.genomicInfo) !== "{}" ?
                      <Menu.Item key="">
                        <a href='#genomicInfo'>Genomic Info</a>
                    </Menu.Item>
                :""}
                {this.state.allData.entrezGeneSymbol?
                    <Menu.Item key="">
                        <a href='#entrezGeneSymbol'>Entrez GeneSymbol</a>
                    </Menu.Item>
                :""}
                {this.state.allData.entrezGeneId?
                    <Menu.Item key="">
                        <a href='#entrezGeneId'>Entrez GeneID</a>
                    </Menu.Item>
                :""}
                {this.state.termAssocArray.length!==0?
                    <Menu.Item key="">
                        <a href='#termAssocArray'>Term Assocication</a>
                    </Menu.Item>
                :""}
                {this.state.diseaseAssocArray.length!==0?
                    <Menu.Item key="">
                        <a href='#diseaseAssocArray'>Disease Assocication</a>
                    </Menu.Item>
                :""}
                {JSON.stringify(this.state.geneLocation) !== "{}" ?
                    <Menu.Item key="">
                        <a href='#Gene_location'>Gene Location</a>
                    </Menu.Item>
                :""}
                {JSON.stringify(this.state.geneText)!== '{}' ?
                    <SubMenu
                    key=""
                    title={
                        <span>
                        <a href='#geneText'>Gene_text</a>
                        </span>
                    }
                    >
                    {JSON.stringify(this.state.geneText["Molecular Genetics"]) !== "{}"? 
                        <Menu.Item key="">
                            <a href='#Molecular Genetics'> Molecular Genetics</a>
                        </Menu.Item>
                    :""}
                    {this.state.geneText["Gene Structure"] ? 
                        <Menu.Item key="">
                            <a href='#Gene Structure'>Gene Structure</a>
                        </Menu.Item>
                    :""}
                    {this.state.geneText["Mapping"] ? 
                        <Menu.Item key="">
                            <a href='#Mapping'>Mapping</a>
                        </Menu.Item>
                    :""}
                    {this.state.geneText["Biochemical Features"] ? 
                        <Menu.Item key="">
                            <a href='#Biochemical Features'>Biochemical Features</a>
                        </Menu.Item>
                    :""}
                    {this.state.geneText["Gene Function"] ? 
                        <Menu.Item key="">
                            <a href='#Gene Function'>Gene Function</a>
                        </Menu.Item>
                    :""}
                    {this.state.geneText["Cloning and Expression"] ? 
                        <Menu.Item key="">
                            <a href='#Cloning and Expression'>Cloning and Expression</a>
                        </Menu.Item>
                    :""}
                    {this.state.geneText["Cloning and Expression"] ? 
                        <Menu.Item key="">
                            <a href='#Cloning and Expression'>Cloning and Expression</a>
                        </Menu.Item>
                    :""}
                    </SubMenu>
                :""}
                {this.state.geneVarientArray.length!==0  ?
                    <Menu.Item>
                        <a href='#geneVarientArray'>Gene Varient</a>
                    </Menu.Item>
                :""}
            </Menu>
            : ""}

            </Sider>

            <div className='gene-main-part'>
                <Search
                    placeholder="请输入OMIM ID/ Entrez ID来查询"
                    onSearch={value => console.log(value)}
                    style={{ maxWidth: 600 }}
                    onSearch={this.handleGeneSearch}
                    loading={this.state.isLoading}
                />
                    <Radio.Group 
                        name="radiogroup" 
                        defaultValue={"omim_id"}
                        onChange = {this.handleSearchCondition}
                    >
                        <Radio value={"omim_id"}>OMIM ID</Radio>
                        <Radio value={"entrez_id"}>Entrez ID</Radio>
                    </Radio.Group>
                <div style={{fontSize:'16px',lineHeight:'2'}}>
                    {/* OMIN ID */}
                    {this.state.allData.OMIM_id ?
                        <div id = "OMIM_id" >
                            <div  style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                                OMIM ID 
                            </div>
                            <div>
                                {this.state.allData.OMIM_id}
                            </div>
                        </div>
                    :""}
                    {/* Entrez ID */}
                    {this.state.allData.entrez_id ?
                    <div id = "entrez_id ">
                        <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                            Entrez ID
                        </div>
                        <div>
                            {this.state.allData.entrez_id}
                        </div>
                    </div>
                    :""}
                    {/* gene_symbol */}
                    {this.state.allData.gene_symbol ?
                    <div id = "gene_symbol">
                        <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                            Gene Symbol
                        </div>
                        <div>
                            {this.state.allData.gene_symbol}
                        </div>
                    </div>
                    :""}
                    {/* otheraliases */}
                    {this.state.allData.otheraliases ?
                    <div id = "otheraliases">
                        <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                        Other Aliases
                        </div>
                        <div>
                            {this.state.allData.otheraliases}
                        </div>
                    </div>
                    :""}
                    {/* maplocation */}
                    {this.state.allData.maplocation ? 
                    <div id = "maplocation">
                        <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                            Map Location
                        </div>
                        <div>
                            {this.state.allData.maplocation}
                        </div>
                    </div>
                    :""}
                    {/* gene_summary */}
                    {this.state.allData.gene_summary ?
                    <div id = "gene_summary">
                        <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                            Gene Summary
                        </div>
                        <div>
                            {this.state.allData.gene_summary}
                        </div>
                    </div>
                    :""}
                    {/* genomicinfo */}
                    {JSON.stringify(this.state.genomicInfo) !== "{}" ? 
                    <div id = "genomicInfo">
                        <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                            Genomic Info 
                        </div>
                        <div style={{fontStyle:"italic"}}>
                            {this.state.genomicInfo.chraccver ? ' chraccver : ': ''}
                            {this.state.genomicInfo.chraccver}
                        </div>
                        <div style={{fontStyle:"italic"}}>
                            {this.state.genomicInfo.exoncount ? 'exoncount : ': ''}
                            {this.state.genomicInfo.exoncount}
                        </div>
                        <div style={{fontStyle:"italic"}}>
                            {this.state.genomicInfo.chrstop ? ' chrstop : ': ''}
                            {this.state.genomicInfo.chrstop}
                        </div>
                        <div style={{fontStyle:"italic"}}>
                            {this.state.genomicInfo.chrstart ? ' chrstart : ': ''}
                            {this.state.genomicInfo.chrstart}
                        </div>
                        <div style={{fontStyle:"italic"}}>
                            {this.state.genomicInfo.chrloc ? ' chrloc : ': ''}
                            {this.state.genomicInfo.chrloc}
                        </div>
                    </div>
                    :""}
                    {/* entrezGeneSymbol */}
                    {this.state.allData.entrezGeneSymbol ?
                    <div id = "entrezGeneSymbol">
                        <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                            Entrez Gene Symbol
                        </div>
                        <div>
                            {this.state.allData.entrezGeneSymbol}
                        </div>
                    </div>
                    :""}
                    {/* entrezGeneId */}
                    {this.state.allData.entrezGeneId ?
                    <div id = "entrezGeneId">
                        <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                            Entrez Gene Id
                        </div>
                        <div>
                            {this.state.allData.entrezGeneId}
                        </div>
                    </div>
                    :""}
                    {/* Disease Association 表格 */}
                    {this.state.diseaseAssocArray.length!==0 ?
                    <div id = "diseaseAssocArray">
                        <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>                        
                            Disease Association
                        </div>
                            <Table 
                                columns={diseaseAssocColumns} 
                                pagination={false}
                                dataSource={this.state.diseaseAssocArray} 
                            />
                    </div>
                    :""}
                    {/* Term Association 表格 */}
                    {this.state.termAssocArray.length!==0 ? 
                    <div id = "termAssocArray">
                        <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>                        
                        Term Association
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
                    :""}
                    {/* Gene_location */}
                    {JSON.stringify(this.state.geneLocation) !== "{}" ?
                    <div  id="Gene_location"  >
                        <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                            Gene Location
                        </div>
                        <div style={{fontStyle:"italic"}}>
                            {this.state.geneLocation["Cytogenetic location"]? ' Cytogenetic location : ': ''}
                            {this.state.geneLocation["Cytogenetic location"]}
                        </div>
                        <div style={{fontStyle:"italic"}}>
                            {this.state.geneLocation["Genomic coordinates (GRCh38):"]? ' Genomic coordinates (GRCh38) : ': ''}
                            {this.state.geneLocation["Genomic coordinates (GRCh38):"]}
                        </div>
                    </div>
                    :""}
                    {/* Gene_TEXT  */}
                    {JSON.stringify(this.state.geneText)!== '{}' ?
                    <div id = "geneText" >
                        <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                        Gene Text 
                        </div>
                        {/* Molecular Genetics */}
                        {JSON.stringify(this.state.geneText["Molecular Genetics"]) !== "{}"? 
                        <div>
                            <div style={{color:'#2780d3',fontSize:"16px", fontWeight:"bold",marginTop:'5px'}}>
                                <CaretRightOutlined />
                                Molecular Genetics
                            </div>
                            {/* Lethal Multiple Pterygium Syndrome  */}
                            {this.state.geneText["Molecular Genetics"]["Lethal Multiple Pterygium Syndrome"]?
                            <div style={{fontStyle:"italic"}}>
                                <span style={{fontWeight:"bold"}}>Lethal Multiple Pterygium Syndrome :</span>
                                {this.state.geneText["Molecular Genetics"]["Lethal Multiple Pterygium Syndrome"]}                            
                            </div>
                            : ''}
                            {/* Fast-Channel Congenital Myasthenic Syndrome 1B  */}
                            {this.state.geneText["Molecular Genetics"]["Fast-Channel Congenital Myasthenic Syndrome 1B"]?
                            <div style={{fontStyle:"italic"}}>
                                <span style={{fontWeight:"bold"}}>Fast-Channel Congenital Myasthenic Syndrome 1B :  </span>
                                {this.state.geneText["Molecular Genetics"]["Fast-Channel Congenital Myasthenic Syndrome 1B"]}                            
                            </div>
                            : ''}
                            {/* Myasthenia Gravis  */}
                            {this.state.geneText["Molecular Genetics"]["Myasthenia Gravis"]?
                            <div style={{fontStyle:"italic"}}>
                                <span style={{fontWeight:"bold"}}>Myasthenia Gravis :   </span>
                                {this.state.geneText["Molecular Genetics"]["Myasthenia Gravis"]}                            
                            </div>
                            : ''}
                            {/* Slow-Channel Congenital Myasthenic Syndrome 1A  */}
                            {this.state.geneText["Molecular Genetics"]["Slow-Channel Congenital Myasthenic Syndrome 1A"]?
                            <div style={{fontStyle:"italic"}}>
                                <span style={{fontWeight:"bold"}}>Slow-Channel Congenital Myasthenic Syndrome 1A :   </span>
                                {this.state.geneText["Molecular Genetics"]["Slow-Channel Congenital Myasthenic Syndrome 1A"]}                            
                            </div>
                            : ''}
                        </div>
                        : ''}
                        {/* Gene Structure*/}
                        {this.state.geneText["Gene Structure"] ? 
                        <div id = "Gene Structure">
                            <div style={{color:'#2780d3',fontSize:"16px", fontWeight:"bold",marginTop:'5px'}}>
                                <CaretRightOutlined />
                                Gene Structure
                            </div>
                            <div style={{fontStyle:"italic"}}>
                                {this.state.geneText["Gene Structure"]}                            
                            </div>  
                        </div>
                        : ''}
                        {/* Mapping */}
                        {this.state.geneText["Mapping"] ? 
                        <div id = "Mapping">
                            <div style={{color:'#2780d3',fontSize:"16px", fontWeight:"bold",marginTop:'5px'}}>
                                <CaretRightOutlined />
                                Mapping
                            </div>
                            <div style={{fontStyle:"italic"}}>
                                {this.state.geneText["Mapping"]}                            
                            </div>  
                        </div>
                        : ''}
                        {/* Biochemical Features */}
                        {this.state.geneText["Biochemical Features"] ? 
                        <div id="Biochemical Features">
                            <div style={{color:'#2780d3',fontSize:"16px", fontWeight:"bold",marginTop:'5px'}}>
                                <CaretRightOutlined />
                                Biochemical Features
                            </div>
                            <div style={{fontStyle:"italic"}}>
                                {this.state.geneText["Biochemical Features"]}                            
                            </div>  
                        </div>
                        : ''}
                        {/* Gene Function */}
                        {this.state.geneText["Gene Function"] ? 
                        <div id = "Gene Function">
                            <div style={{color:'#2780d3',fontSize:"16px", fontWeight:"bold",marginTop:'5px'}}>
                                <CaretRightOutlined />
                                Gene Function
                            </div>
                            <div style={{fontStyle:"italic"}}>
                                {this.state.geneText["Gene Function"]}                            
                            </div>  
                        </div>
                        : ''}
                        {/* Cloning and Expression */}
                        {this.state.geneText["Cloning and Expression"] ? 
                        <div id= "Cloning and Expression">
                            <div style={{color:'#2780d3',fontSize:"16px", fontWeight:"bold",marginTop:'5px'}}>
                                <CaretRightOutlined />
                                Cloning and Expression
                            </div>
                            <div style={{fontStyle:"italic"}}>
                                {this.state.geneText["Cloning and Expression"]}                            
                            </div>  
                        </div>
                        : ''}
                        {/* Animal Model */}
                        {this.state.geneText["Animal Model"] ? 
                        <div id = "Animal Model">
                            <div style={{color:'#2780d3',fontSize:"16px", fontWeight:"bold",marginTop:'5px'}}>
                                <CaretRightOutlined />
                                Animal Model
                            </div>
                            <div style={{fontStyle:"italic"}}>
                                {this.state.geneText["Animal Model"]}                            
                            </div>  
                        </div>
                        : ''}
                        {/* TEXT */}
                        {this.state.geneText["TEXT"] ? 
                        <div id = "TEXT">
                            <div style={{color:'#2780d3',fontSize:"16px", fontWeight:"bold",marginTop:'5px'}}>
                                <CaretRightOutlined />
                                TEXT
                            </div>
                            <div style={{fontStyle:"italic"}}>
                                {this.state.geneText["TEXT"]}                            
                            </div>  
                        </div>
                        :""}
                        {/* Description */}
                        {this.state.geneText["Description"] ? 
                        <div id = "Description">
                            <div style={{color:'#2780d3',fontSize:"16px", fontWeight:"bold",marginTop:'5px'}}>
                                <CaretRightOutlined />
                                Description
                            </div>
                            <div style={{fontStyle:"italic"}}>
                                {this.state.geneText["Description"]}                            
                            </div>  
                        </div>
                        : ''}
                    </div>
                    : ''}
                    {/* Gene_variant 表格 */}
                    {this.state.geneVarientArray.length!==0 ? 
                    <div id = "geneVarientArray">
                        <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>  
                            Gene Varient
                        </div>
                        <Table 
                            columns={geneVarientColumns} 
                            pagination={false}
                            dataSource={this.state.geneVarientArray} 
                        />
                    </div>
                    :""}
                    
               </div>

    
            </div>
            </Layout>

        
        
        )}
            
               
        }


export default Gene;