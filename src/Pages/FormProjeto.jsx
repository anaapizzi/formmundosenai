import * as C from "@chakra-ui/react"
import { useState } from "react";


const FormProjeto = () => {
    // Estado para gerenciar os checkboxes selecionados
    const [checkedItems, setCheckedItems] = useState({
        cettc: false,
        cetafest: false,
        ceticc: false,
        cetafaju: false
    });

    // Função para lidar com a mudança dos checkboxes
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckedItems(prevState => ({
            ...prevState,
            [name]: checked
        }));
    };

    return(
        <C.VStack spacing={5}>
            <C.Text color="black" fontFamily="ariel">Projeto</C.Text>
            <C.Input type="text" placeholder="insira o projeto" />
            <C.Input type="text" placeholder="Área de atuação" />
           
            {/* Checkbox para escolas */}
            <C.Box>
                <C.Text mb={2}>Escolaridade:</C.Text>
                <C.VStack spacing={2} align="start">
                    <C.Checkbox 
                        name="cettc" 
                        isChecked={checkedItems.cettc} 
                        onChange={handleCheckboxChange}
                    >
                        CETTC
                    </C.Checkbox>
                    <C.Checkbox 
                        name="cetafest" 
                        isChecked={checkedItems.cetafest} 
                        onChange={handleCheckboxChange}
                    >
                        CETA FEST
                    </C.Checkbox>
                    <C.Checkbox 
                        name="ceticc" 
                        isChecked={checkedItems.ceticc} 
                        onChange={handleCheckboxChange}
                    >
                        CETICC
                    </C.Checkbox>
                    <C.Checkbox 
                        name="cetafaju" 
                        isChecked={checkedItems.cetafaju} 
                        onChange={handleCheckboxChange}
                    >
                        CETA FAJU
                    </C.Checkbox>
        </C.VStack>
        </C.Box>
            
            <C.Input type="text" placeholder="Coordenador/Professor" />
        </C.VStack>
    )
}
    


export default FormProjeto