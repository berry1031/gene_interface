import React from 'react';
import { Descriptions} from 'antd';
import {Link} from 'react-router-dom';
import { DoubleLeftOutlined } from '@ant-design/icons';
import './styles/diseaseDetailStyle.css';



const disease = {

    "Heterogeneity": "",
    "Mapping": "H35.5",
    "History": "",
    "Pathogenesis": "Disorder",
    "TEXT": "Benign concentric annular macular dystrophy (BCAMD) is initially characterized by parafoveal hypopigmentation and good visual acuity, but progresses to a retinitis pigmentosa (RP)-like phenotype with a bull's eye configuration (van Lith-Verhoeven et al., 2004).",
    "Cytogenetics": "", 
    "Nomenclature": "",
    "Description": "Benign concentric annular macular dystrophy",
    "Inheritance": "",
    "Location": "153870",
    "Phenotype": "",
    "Diagnosis": "By linkage analysis in the Dutch family with BCAMD originally described by Deutman (1974), van Lith-Verhoeven et al. (2004) established complete segregation of the phenotype (maximum multipoint lod score, 3.8) with DNA markers at chromosome 6p12.3-q16. Recombination events defined a critical interval spanning 30.7 cM at the long arm of chromosome 6 between markers D6S269 and D6S300.",
    "definition_orp": "Autosomal dominant",
    "Etiology_orp": "",
    "Epidemiology_orp": "",
    "diease_name_orp": "",
    "Inheritance_orp": "",
    "GARD_orp": "",
    "MeSH_orp": "",
    "ORPHA_orp": "",
    "ICD-10_orp": "",
    "UMLS_orp": "",
    "MedDRA_orp": "",
    "OMIM_orp": "",
    "Prevalence_orp": "",
    "Clinical_Management": "",
    "Molecular_Genetics": "",
    "Other_Features": "",
    "Animal_Model": "",
    "Phenotype__mapping_key": "",
    "Phenotype__MIM_number": "In a grandmother and her daughter, granddaughter, and grandson, Deutman (1974) described a benign concentric annular macular dystrophy. The affected persons showed a depigmented ring around an intact central area, not unlike the eyes in chloroquin retinopathy and cone dystrophy. All 4 had almost normal acuity. Deutman (1974) found no definite report of the same disorder, but raised the question that the kindred reported by Martyn and Walker (1971) might have had the same condition.*Coppeto and Ayazi (1982) observed wide variability in the affected members of 3 generations of a family: only dyschromatopsia in 6, dyschromatopsia and foveal hyperpigmentation in 1, and dyschromatopsia, foveal hyperpigmentation, and perifoveal circular pigment epithelial atrophy in 4. Normal findings on electrophysiologic testing suggested that this is a focal (macular) disorder rather than a generalized fundus disorder. No male-to-male transmission was observed.*In a 15-year follow-up of the family reported by Deutman (1974), van Lith-Verhoeven et al. (2004) found a more pronounced involvement of the peripheral retina together with increased photoreceptor cell dysfunction, as found in RP.",
    "Biochemical_Features": "Benign concentric annular macular dystrophy (BCAMD) is a progressive autosomal dominant macular dystrophy characterized by parafoveal hypopigmentation followed by a retinitis pigmentosa-like phenotype (nyctalopia and peripheral vision loss) with a bull\u2019s eye configuration.",
    "Clinical_Features": "",
    "Population_Genetics": "In affected members of a Dutch family with BCAMD mapping to chromosome 6p12.3-q16, van Lith-Verhoeven et al. (2004) screened for mutations in 5 candidate genes. They identified a mutation in the interphotoreceptor matrix proteoglycan-1 gene (IMPG1; 602870), a 1866T-C transition in exon 13, at nucleotide 1866 in exon 13, resulting in a leu579-to-pro substitution. The mutation was not found in 190 control individuals. However, the mutation was not predicted to have a major effect on the protein, and the authors stated that study of additional patients was necessary to establish the causality of the mutation.",
    "Clinical_description_orp": "",
    "Antenatal_diagnosis_orp": "",
    "Differential_diagnosis_orp": "",
    "Genetic_counseling_orp": "",
    "Diagnostic_methods_orp": "",
    "Classification_level_orp": "",
    "Age_of_onset_orp": "",
    "Gene_Locus": "",
    "Gene_Locus__MIM_number": "<1 / 1 000 000",
    "Genotype_Phenotype_Correlations": "",
    "Synonym_orp": ""
}
  
class SymptomDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            disease:{},
            error: null,
            isLoading: false,
        }
    }
    componentDidMount() {
        this.setState({disease});
    }


    render(){
        return (
            <div className='diagnose-main-part'>
                <div className='disease-detail' style={{fontSize:'16px',lineHeight:'2'}}>
                <Link to='/symptom'>
                <DoubleLeftOutlined />
                </Link>
                <br/>
                <h3 style={{ marginBottom: 16 }}>Disease</h3>
                <div style={{color:'#1890ff'}}>
                    {this.state.disease.Heterogeneity ? ' Heterogeneity: ': ''}
                </div>
                <div>{this.state.disease.Heterogeneity}</div>
                
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",  marginTop:'15px'}}>
                    {this.state.disease.Mapping ? ' Mapping: ': ''}
                </div>
                <div >{this.state.disease.Mapping}</div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold", marginTop:'15px'}}>
                    {this.state.disease.History ? ' History: ': ''}
                </div>
                <div>{this.state.disease.History}</div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold", marginTop:'15px'}}>
                    {this.state.disease.Pathogenesis ? ' Pathogenesis: ': ''}
                </div>
                <div>
                    {this.state.disease.Pathogenesis}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.TEXT ? ' TEXT: ': ''}
                </div>
                <div>{this.state.disease.TEXT}</div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Cytogenetics ? ' Cytogenetics: ': ''}
                </div>
                <div>{this.state.disease.Cytogenetics}</div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Nomenclature ? ' Nomenclature: ': ''}
                </div>
                <div>
                    {this.state.disease.Nomenclature}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Description ? ' Description: ': ''}
                </div>
                <div>
                    {this.state.disease.Description}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Inheritance ? ' Inheritance: ': ''}
                </div>
                <div>
                    {this.state.disease.Inheritance}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Location ? ' Location: ': ''}
                </div>
                <div>
                    {this.state.disease.Location}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Phenotype ? ' Phenotype: ': ''}
                </div>
                <div>
                    {this.state.disease.Phenotype}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Diagnosis ? ' Diagnosis: ': ''}
                </div>
                <div>
                    {this.state.disease.Diagnosis}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.definition_orp ? ' definition_orp: ': ''}
                </div>
                <div>
                    {this.state.disease.definition_orp}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Etiology_orp ? ' Etiology_orp: ': ''}
                </div>
                <div>
                    {this.state.disease.Etiology_orp}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Epidemiology_orp ? ' Epidemiology_orp: ': ''}
                </div>
                <div>
                    {this.state.disease.Epidemiology_orp}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.diease_name_orp ? ' diease_name_orp: ': ''}
                </div>
                <div>
                    {this.state.disease.diease_name_orp}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Inheritance_orp ? ' Inheritance_orp: ': ''}
                </div>
                <div>
                    {this.state.disease.Inheritance_orp}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.GARD_orp ? ' GARD_orp: ': ''}
                </div>
                <div>
                    {this.state.disease.GARD_orp}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.MeSH_orp ? ' MeSH_orp: ': ''}
                </div>
                <div>
                    {this.state.disease.MeSH_orp}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.ORPHA_orp ? ' ORPHA_orp: ': ''}
                </div>
                <div>
                    {this.state.disease.ORPHA_orp}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease['ICD-10_orp'] ? ' ICD-10_orp: ': ''}
                </div>
                <div>
                    {this.state.disease['ICD-10_orp']}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.UMLS_orp ? ' UMLS_orp: ': ''}
                </div>
                <div>
                    {this.state.disease.UMLS_orp}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.MedDRA_orp ? ' MedDRA_orp: ': ''}
                </div>
                <div>
                    {this.state.disease.MedDRA_orp}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.OMIM_orp ? ' OMIM_orp: ': ''}
                </div>
                <div>
                    {this.state.disease.OMIM_orp}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Prevalence_orp ? ' Prevalence_orp: ': ''}
                </div>
                <div>
                    {this.state.disease.Prevalence_orp}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Clinical_Management ? ' Clinical_Management: ': ''}
                </div>
                <div>
                    {this.state.disease.Clinical_Management}
                </div>
  
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Molecular_Genetics ? ' Molecular_Genetics: ': ''}
                </div>
                <div>
                    {this.state.disease.Molecular_Genetics}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Other_Features ? ' Other_Features: ': ''}
                </div>
                <div>
                    {this.state.disease.Other_Features}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Animal_Model ? ' Animal_Model: ': ''}
                </div>
                <div>
                    {this.state.disease.Animal_Model}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Phenotype__mapping_key ? ' Phenotype__mapping_key: ': ''}
                </div>
                <div>
                    {this.state.disease.Phenotype__mapping_key}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Phenotype__MIM_number ? ' Phenotype__MIM_number: ': ''}
                </div>
                <div>
                    {this.state.disease.Phenotype__MIM_number}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Biochemical_Features ? ' Biochemical_Features: ': ''}
                </div>
                <div>
                    {this.state.disease.Biochemical_Features}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Clinical_Features ? ' Clinical_Features: ': ''}
                </div>
                <div>
                    {this.state.disease.Clinical_Features}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Population_Genetics ? ' Population_Genetics: ': ''}
                </div>
                <div>
                    {this.state.disease.Population_Genetics}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Clinical_description_orp ? ' Clinical_description_orp: ': ''}
                </div>
                <div>
                    {this.state.disease.Clinical_description_orp}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Antenatal_diagnosis_orp ? ' Antenatal_diagnosis_orp: ': ''}
                </div>
                <div>
                    {this.state.disease.Antenatal_diagnosis_orp}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Differential_diagnosis_orp ? ' Differential_diagnosis_orp: ': ''}
                </div>
                <div>
                    {this.state.disease.Differential_diagnosis_orp}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Genetic_counseling_orp ? ' Genetic_counseling_orp: ': ''}
                </div>
                <div>
                    {this.state.disease.Genetic_counseling_orp}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Diagnostic_methods_orp ? ' Diagnostic_methods_orp: ': ''}
                </div>
                <div>
                    {this.state.disease.Diagnostic_methods_orp}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Classification_level_orp ? ' Classification_level_orp: ': ''}
                </div>
                <div>
                    {this.state.disease.Classification_level_orp}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Age_of_onset_orp ? ' Age_of_onset_orp: ': ''}
                </div>
                <div>
                    {this.state.disease.Age_of_onset_orp}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Gene_Locus ? ' Gene_Locus: ': ''}
                </div>
                <div>
                    {this.state.disease.Gene_Locus}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Gene_Locus__MIM_number? ' Gene_Locus__MIM_number: ': ''}
                </div>
                <div>
                    {this.state.disease.Gene_Locus__MIM_number}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Genotype_Phenotype_Correlations? ' Genotype_Phenotype_Correlations: ': ''}
                </div>
                <div>
                    {this.state.disease.Genotype_Phenotype_Correlations}
                </div>
                <div style={{color:'#1890ff',fontSize:"17px", fontWeight:"bold",marginTop:'15px'}}>
                    {this.state.disease.Synonym_orp? ' Synonym_orp: ': ''}
                </div>
                <div>
                    {this.state.disease.Synonym_orp}
                </div>
    
            </div>
            </div>

          );

        
    }
}

export default SymptomDetail;



