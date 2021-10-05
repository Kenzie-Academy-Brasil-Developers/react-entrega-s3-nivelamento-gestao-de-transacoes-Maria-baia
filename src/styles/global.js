import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
        outline: 0;
    }

    body {
        background-color: #ccd5ae;
        color: #faedcd;
        text-align: center;
    }

    .display {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10%;
    }

    h1, button, li, h3, input{
        margin: 10px;
        margin-bottom: 10px;
    }

    input {
        background-color: #d4a373;
        border-radius: 10px;
        font-size: 18px;
        border: 1px solid #ccd5ae;
        color: #e9edc9;
        padding: 5px;
        ::placeholder {
            color: #fefae0;
        }
    }

    button {
        width: 200px;
        border-radius: 10px;
        background-color: #faedcd;
        color: #d4a373;
        border: 1px solid #d4a373;
        padding: 5px;
    }

    ul {
        list-style: none;
        width: 300px;
    }
    
    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .table {
        display: flex;
        flex-direction: row;
        color: #fefae0;
        margin-left:40px;
    }

    h2 {
        margin: 0 15px 0 10px;
    }

`;