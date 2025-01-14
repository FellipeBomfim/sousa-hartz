import { Button, useMediaQuery } from "@mui/material";
import data from "./data.json";

export const Steps = () => {

    const isMobile = useMediaQuery('(min-width:1000px)');

    const styles = {
        main: {
            backgroundColor: "#ffffff",
            color: "#000000",
            width: "100vw",
            height: isMobile ? "90vh" : "160vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },
    
        box: {
            width: "60vw",
            height: "90vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
    
        title: {
            width: "60vw",
            fontWeight: 800
        },
    
        description: {
            fontWeight: 300,
            alignSelf: "start"
        },
    
        stepsRow: {
            backgroundColor: "#efefef",
            width: isMobile ? "60vw" : "80vw",
            height: isMobile ? "50vh" : "160vh",
            display: "flex",
            flexDirection: isMobile ? "row" : "column",
            justifyContent: "space-between"
        },
    
        step: {
            width: "12vw",
            height: isMobile ? "60vh" : "30vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            textAlign: "center",
            margin: "0 auto auto auto",
            boxSizing: "border-box",
            padding: isMobile ? "2.5vh" : 0
        },

        stepNumber: {
            margin: isMobile ? "" : "1vh"
        },
    
        stepTitle: {
            width: isMobile ? "12vw" : "60vw",
            margin : isMobile ? "" : "1vh"
        },
    
        line: {
            backgroundColor: "#000000",
            width: isMobile ? "10vw" : "60vw",
            height: "0.1vh"
        },
    
        stepDescription: {
            width: isMobile ? "12vw" : "75vw",
            fontWeight: 300
        },
    
        button: {
            backgroundColor: "#bf996f",
            color: "#ffffff",
            width: isMobile ? "35vw" : "80vw",
            height: isMobile ? "5vh" : "5vh",
            marginTop: "1.5vw",
            padding: 0,
            borderRadius: 5
        }
    }

    return (
        <div style={styles.main}>

            <div style={styles.box}>

                <h2 style={styles.title}>• PROCESSO E METODOLOGIA</h2>

                <h3 style={styles.description}>
                    É possível prevenir a falência com organização e planejamento.
                    <br/>
                    Confira quatro ações importantes para não fechar as portas da empresa.
                </h3>

                <div style={styles.stepsRow}>

                    {data.map((item) => {
                        return (
                            <div style={styles.step}>

                                <h1 style={styles.stepNumber}>{item.number}</h1>

                                <div style={styles.line} />

                                <h3 style={styles.stepTitle}>
                                    {item.title}
                                </h3>

                                <h3 style={styles.stepDescription}>
                                    {item.description}
                                </h3>

                            </div>
                        );
                    })}

                </div>

                <Button variant="container" style={styles.button}>
                    <h3>
                        QUERO DISCUTIR SOBRE MINHA EMPRESA
                    </h3>
                </Button>

            </div>

        </div>
    );
}