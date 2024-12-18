import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";


export default function Page() {
  return (
    <Container maxWidth="lg">
        <Paper style={{marginTop:'25%', borderRadius:15}}>
            <Box>
                <div className="flex gap-8">
                    <Box style={{backgroundColor:'#000000', color:'#FFFFFF'}} maxWidth="50%" borderRadius={5} margin={1}>
                        <Typography variant="h4" style={{textAlign:'center'}} marginTop={2}>Sobre</Typography>
                        <Typography margin={5}>O sistema de gerenciamento curricular é um projeto feito para auxiliar os discentes e coordenadores. Nele discentes podem encontrar um caminho otimizado de fluxo das disciplinas personalizado baseado nas disciplinas já cursadas. Para os coordenadores é uma poderosa ferramenta para visualizar a situação de alunos e construção de um horário otimizado para os alunos cadastrados a fim de diminuir a quantidade de jubilados e tempo de conclusão de curso.</Typography>
                    </Box>
                    <Box maxWidth="50%"  margin={1}>
                        <Typography variant="h6" style={{textAlign:'center'}}>
                            Sistema de Gerenciamento Curricular
                        </Typography>
                        <Typography>EMAIL:</Typography>
                        <TextField
                            fullWidth
                        />
                        <Typography>SENHA:</Typography>
                        <TextField
                            fullWidth
                        />
                        <Button variant="contained" fullWidth>ENTRAR</Button>
                        <div className="flex">
                            <Typography>Não possue conta?</Typography><Button>Cadastre-se</Button>
                        </div>
                    </Box>
                </div>
            </Box>
        </Paper>
    </Container>
  );
}
