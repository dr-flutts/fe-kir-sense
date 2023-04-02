import Container from "../../widgets/Container";
import Header from "../../widgets/Header";
import Main from "../../widgets/Main";

const Dashboard = () => {
  return (
    <Container>
      <Header label="Dashboard" />
      <Main>
        <img src={require("../../assets/images/eye.png")} alt="eye" width={412} />
      </Main>
    </Container>
  )
};

export default Dashboard;
