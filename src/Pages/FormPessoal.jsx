import * as C from "@chakra-ui/react"



const FormPessoal = () => {
    

    return(
        <C.VStack spacing={5} >
            <C.Text color="black" fontFamily="ariel">Pessoal</C.Text>
            
            <C.Input type="email" placeholder="insira seu e-mail" />
            <C.Input type="text" placeholder="insira seu telefone" />
            <C.Input type="text" placeholder="insira seu CPF" />
            <C.Input type="text" placeholder="insira seu nome" />

              
           <C.HStack>
            <input type="radio" id="a" name="aa"/>
            <label htmlFor="Masculino">Masculino</label>
            <input type="radio" id="a" name="aa"/>
            <label htmlFor="Feminino">Feminino</label>

           </C.HStack>
        </C.VStack>
        )
    }


export default FormPessoal