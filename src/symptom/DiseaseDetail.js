import React from 'react';
import { Input, Modal } from 'antd';
import { Table } from 'antd';

import './styles/diseaseDetailStyle.css';
import axios from 'axios';

const { Search } = Input;


class DiseaseDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            disease:{},
            error: null,
            isLoading: false,
            tableData: [],
            tableColumns: [],
            tableProData: [],
            tableProColumns: [],
        }
    }
    

    componentDidMount(){
        const diseaseId = this.props.match.params.id;
        this.fetchData(diseaseId);
    }

    fetchData = id => {
        const diseaseId = this.props.match.params.id;
        this.setState({isLoading: true }, ()=>{
            axios(`http://161.189.10.25:4000/diseaseInformation?disease_id=${id}`)
            .then(res => {
                const disease = res.data;
                const tableData = [];
                const dataObj= {};
                if(disease.Location){dataObj.Location = disease.Location;}
                if(disease.Phenotype){dataObj.Phenotype= disease.Phenotype;}
                if(disease.Phenotype__MIM_number){dataObj.Phenotype__MIM_number = disease.Phenotype__MIM_number;}
                if(disease.Inheritance){dataObj.Inheritance = disease.Inheritance;}
                if(disease.Phenotype__mapping_key){dataObj.Phenotype__mapping_key = disease.Phenotype__mapping_key;}
                if(disease.Gene_Locus){dataObj.Gene_Locus = disease.Gene_Locus;}
                if(disease.Gene_Locus__MIM_number){dataObj.Gene_Locus__MIM_number = disease.Gene_Locus__MIM_number;}
                if(JSON.stringify(dataObj) !== '{}') {tableData.push(dataObj)};

                const tableProData = [];
                const dataProObj= {};
                if(disease.Classification_level_orp){dataProObj.Classification_level_orp = disease.Classification_level_orp;}
                if(disease.Synonym_orp){dataProObj.Synonym_orp = disease.Synonym_orp;}
                if(disease.Prevalence_orp){dataProObj.Prevalence_orp = disease.Prevalence_orp;}
                if(disease.Inheritance_orp){dataProObj.Inheritance_orp = disease.Inheritance_orp;}
                if(disease.ORPHA_orp){dataProObj.ORPHA_orp = disease.ORPHA_orp;}
                if(disease["ICD-10_orp"]){dataProObj["AICD-10_orp"]= disease["ICD-10_orp"];}
                if(disease.UMLS_orp){dataProObj.UMLS_orp = disease.UMLS_orp;}
                if(disease.MeSH_orp){dataProObj.MeSH_orp = disease.MeSH_orp;}
                if(disease.GARD_orp){dataProObj.GARD_orp = disease.GARD_orp;}
                if(disease.MedDRA_orp){dataProObj.MedDRA_orp= disease.MedDRA_orp;}
                if(JSON.stringify(dataProObj) !== '{}') {tableProData.push(dataProObj)};


                //table title column
                const tableColumns = [
                    {
                    title: 'Location',
                    dataIndex: 'Location',
                    },
                    {
                    title: 'Phenotype',
                    dataIndex: 'Phenotype',
                    },
                    {
                    title: 'Phenotype MIM number',
                    dataIndex: 'Phenotype__MIM_number',
                    },
                    {
                    title: 'Inheritance',
                    dataIndex: 'Inheritance',
                    },
                    {
                    title: 'Phenotype mapping key',
                    dataIndex: 'Phenotype__mapping_key',
                    },
                    {
                    title: 'Gene Locus',
                    dataIndex: 'Gene_Locus',
                    },
                    {
                    title: 'Gene Locus MIM number',
                    dataIndex: 'Gene_Locus__MIM_number',
                    },
                ];
                

                //another table title column
                const tableProColumns = [
                    {
                    title: 'Classification level',
                    dataIndex: 'Classification_level_orp',
                    },
                    {
                    title: 'Synonym',
                    dataIndex: 'Synonym_orp',
                    },
                    {
                    title: 'Prevalence',
                    dataIndex: 'Prevalence_orp',
                    },
                    {
                    title: 'Inheritance',
                    dataIndex: 'Inheritance_orp',
                    },
                    {
                    title: 'Age of onset',
                    dataIndex: 'Age_of_onset_orp',
                    },
                    {
                    title: 'ORPHA',
                    dataIndex: 'ORPHA_orp',
                    },
                    {
                    title: 'ICD-10',
                    dataIndex: 'ICD-10_orp',
                    },
                    {
                    title: 'OMIM',
                    dataIndex: 'OMIM_orp',
                    },
                    {
                    title: 'UMLS',
                    dataIndex: 'UMLS_orp',
                    }, 
                    {
                    title: 'MeSH',
                    dataIndex: 'MeSH_orp',
                    },
                    {
                    title: 'GARD',
                    dataIndex: 'GARD_orp',
                    },
                    {
                    title: 'MedDRA',
                    dataIndex: 'MedDRA_orp',
                    }   
                ];
                // JSON.stringify(disease) === '{}'
                if(diseaseId !== undefined && JSON.stringify(disease) === '{}'){
                    this.info();
                }else{
                    this.setState({disease});
                    if(tableData.length !== 0){
                        this.setState({tableData,tableColumns});
                        if (tableProData.length !== 0){
                            this.setState({tableProData,tableProColumns});
                        }else{
                            this.setState({tableProData:[],tableProColumns:[]});
                        }
                    }else{
                        this.setState({tableData:[],tableColumns:[]});
                        if (tableProData.length !== 0){
                            this.setState({tableProData,tableProColumns});
                        }else{
                            this.setState({tableProData:[],tableProColumns:[]});
                        }

                    }

                }
                this.setState({isLoading: false });
            })
            .catch(error=>{console.error(error);
                this.setState({isLoading: false });
            });  
        });

    }



    // fecth data if input a disease ID 
    handleSearch = value => {
        if (value.length <=0 ) {
            this.warning();
        }
        else{
            this.props.history.push(`/disease/${value}`);
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
            <div className='diagnose-main-part'>
                <div className = 'search-disease-box'>
                <Search
                    placeholder="请输入疾病编号"
                    style={{ width: 200 }}
                    loading={this.state.isLoading}
                    onSearch={this.handleSearch}
                />
                <span className ='disease-search-hint' style={{fontSize:'14px',lineHeight:'2'}}>
                想了解更多疾病? 输入编号后查询(1-9014)
                </span>
                </div>
                <div className='disease-detail' style={{fontSize:'16px',lineHeight:'2'}}>
                {/* <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.disease_name ? ' Disease Name : ': ''}
                </div > */}
                <div style={{color:'#2780d3',fontSize:"21px", fontWeight:"bold",marginTop:'20px',marginBottom:'25px'}}>
                    {this.state.disease.disease_name}
                </div>
                <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.definition_orp ? ' Definition ( from ORPHANET ): ': ''}
                </div>
                <div>
                    {this.state.disease.definition_orp}
                </div>
                <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Description ? ' Description: ': ''}
                </div>
                <div>
                    {this.state.disease.Description}
                </div>

                <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.diease_name_orp ? ' Disease Name ( from ORPHANET ): ': ''}
                </div>
                <div>
                    {this.state.disease.diease_name_orp}
                </div>
                <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Nomenclature ? ' Nomenclature: ': ''}
                </div>
                <div>
                    {this.state.disease.Nomenclature}
                </div>
                <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",  marginTop:'15px'}}>
                    {this.state.tableProData.length !== 0?' Brief Information: ': ''}
                </div>
                {this.state.tableProData.length !== 0?
                //only display table when data is fetched
                <Table 
                    key = {this.state.disease.disease_name}
                    columns={this.state.tableProColumns} 
                    dataSource={this.state.tableProData} 
                    size="middle" 
                    pagination={false}
                /> : ''}
                <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Epidemiology_orp ? ' Epidemiology ( from ORPHANET ): ': ''}
                </div>
                <div>
                    {this.state.disease.Epidemiology_orp}
                </div>
                <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Clinical_Features ? ' Clinical Features: ': ''}
                </div>
                <div>
                    {this.state.disease.Clinical_Features}
                </div>
                <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Clinical_description_orp ? ' Clinical Description ( from ORPHANET ): ': ''}
                </div>
                <div>
                    {this.state.disease.Clinical_description_orp}
                </div>
                <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Biochemical_Features ? ' Biochemical Features: ': ''}
                </div>
                <div>
                    {this.state.disease.Biochemical_Features}
                </div>
                <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Other_Features ? ' Other Features: ': ''}
                </div>
                <div>
                    {this.state.disease.Other_Features}
                </div>
                <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Diagnosis ? ' Diagnosis: ': ''}
                </div>
                <div>
                    {this.state.disease.Diagnosis}
                </div>
                <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Diagnostic_methods_orp ? ' Diagnostic Methods ( from ORPHANET ): ': ''}
                </div>
                <div>
                    {this.state.disease.Diagnostic_methods_orp}
                </div>
                <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Differential_diagnosis_orp ? ' Differential Diagnosis ( from ORPHANET ): ': ''}
                </div>
                <div>
                    {this.state.disease.Differential_diagnosis_orp}
                </div>
                <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Antenatal_diagnosis_orp ? ' Antenatal Diagnosis ( from ORPHANET ): ': ''}
                </div>
                <div>
                    {this.state.disease.Antenatal_diagnosis_orp}
                </div>
                <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Clinical_Management ? ' Clinical Management: ': ''}
                </div>
                <div>
                    {this.state.disease.Clinical_Management}
                </div>
                <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold", marginTop:'15px'}}>
                    {this.state.disease.Pathogenesis ? ' Pathogenesis: ': ''}
                </div>
                <div>
                    {this.state.disease.Pathogenesis}
                </div>
                <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Genetic_counseling_orp ? ' Genetic Counseling ( from ORPHANET ): ': ''}
                </div>
                <div>
                    {this.state.disease.Genetic_counseling_orp}
                </div>
                <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Etiology_orp ? ' Etiology ( from ORPHANET ): ': ''}
                </div>
                <div>
                    {this.state.disease.Etiology_orp}
                </div>
                <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",  marginTop:'15px'}}>
                    {this.state.tableData.length !== 0?' Gene Association: ': ''}
                </div>                   
                {this.state.tableData.length !== 0?
                //only display table when data is fetched
                <Table 
                    key = {this.state.disease.disease_name}
                    columns={this.state.tableColumns} 
                    dataSource={this.state.tableData} 
                    size="middle" 
                    pagination={false}
                /> : ''}
                <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.TEXT ? ' TEXT: ': ''}
                </div>
                <div>{this.state.disease.TEXT}</div>

                <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Genotype_Phenotype_Correlations? ' Genotype Phenotype Correlations: ': ''}
                </div>
                <div>
                    {this.state.disease.Genotype_Phenotype_Correlations}
                </div>
                <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",  marginTop:'15px'}}>
                    {this.state.disease.Mapping ? ' Mapping: ': ''}
                </div>
                <div>
                    {this.state.disease.Mapping}
                </div>
                <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Heterogeneity ? ' Heterogeneity: ': ''}
                </div>
                <div>
                    {this.state.disease.Heterogeneity}
                </div>
                <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Cytogenetics ? ' Cytogenetics: ': ''}
                </div>
                <div>
                    {this.state.disease.Cytogenetics}
                </div>
                <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Molecular_Genetics ? ' Molecular Genetics: ': ''}
                </div>
                <div>
                    {this.state.disease.Molecular_Genetics}
                </div>
                <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Population_Genetics ? ' Population Genetics: ': ''}
                </div>
                <div>
                    {this.state.disease.Population_Genetics}
                </div>
                <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Animal_Model ? ' Animal Model: ': ''}
                </div>
                <div>
                    {this.state.disease.Animal_Model}
                </div>
                <div style={{color:'#2780d3',fontSize:"17px", fontWeight:"bold", marginTop:'15px'}}>
                    {this.state.disease.History ? ' History: ': ''}
                </div>
                <div>
                    {this.state.disease.History}
                </div>
                

            </div>
            </div>

          );

        
    }
}

export default DiseaseDetail;



