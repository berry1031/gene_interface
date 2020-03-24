        import React from 'react';
        import { Input } from 'antd';

        import './styles/geneStyle.css';

        const { Search } = Input;

        class Gene extends React.Component {
        

            render(){

                return (
                    <div className='gene-main-part'>
                        <Search
                            placeholder="请输入基因号"
                            onSearch={value => console.log(value)}
                            style={{ maxWidth: 600 }}
                        />
        
                    
        
                    </div>
        
            )}
            
               
        }


        export default Gene;