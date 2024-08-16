import * as C from "@chakra-ui/react"

const unidadesFederativas = [
    { sigla: 'AC', nome: 'Acre' },
    { sigla: 'AL', nome: 'Alagoas' },
    { sigla: 'AP', nome: 'Amapá' },
    { sigla: 'AM', nome: 'Amazonas' },
    { sigla: 'BA', nome: 'Bahia' },
    { sigla: 'CE', nome: 'Ceará' },
    { sigla: 'DF', nome: 'Distrito Federal' },
    { sigla: 'ES', nome: 'Espírito Santo' },
    { sigla: 'GO', nome: 'Goiás' },
    { sigla: 'MA', nome: 'Maranhão' },
    { sigla: 'MT', nome: 'Mato Grosso' },
    { sigla: 'MS', nome: 'Mato Grosso do Sul' },
    { sigla: 'MG', nome: 'Minas Gerais' },
    { sigla: 'PA', nome: 'Pará' },
    { sigla: 'PB', nome: 'Paraíba' },
    { sigla: 'PR', nome: 'Paraná' },
    { sigla: 'PE', nome: 'Pernambuco' },
    { sigla: 'PI', nome: 'Piauí' },
    { sigla: 'RJ', nome: 'Rio de Janeiro' },
    { sigla: 'RN', nome: 'Rio Grande do Norte' },
    { sigla: 'RS', nome: 'Rio Grande do Sul' },
    { sigla: 'RO', nome: 'Rondônia' },
    { sigla: 'RR', nome: 'Roraima' },
    { sigla: 'SC', nome: 'Santa Catarina' },
    { sigla: 'SP', nome: 'São Paulo' },
    { sigla: 'SE', nome: 'Sergipe' },
    { sigla: 'TO', nome: 'Tocantins' },
  ];

const FormEndereco = () => {
    return(
        <C.VStack spacing={5}>
             <C.Text color="black" fontFamily="ariel">Endereço</C.Text>
            <C.Input type="text" placeholder="insira o Cep " />
            <C.Input type="text" placeholder="insira o bairro" />
            <C.Input type="text" placeholder="insira a UF" />
           
              {/* Select para as unidades federativas */}
              <C.Select placeholder="Selecione a UF">
                {unidadesFederativas.map(uf => (
                    <option key={uf.sigla} value={uf.sigla}>
                        {uf.nome} ({uf.sigla})
                    </option>
                ))}
            </C.Select>
        </C.VStack>
    )
}

export default FormEndereco

