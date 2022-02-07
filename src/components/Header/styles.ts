import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 75px;
  background:#635daf;
  color:white;

  .container{
    margin:0 auto;
    height: 100%;
    width: 100%;
    max-width:1280px;

    display:flex;
    align-items:center;
    justify-content: space-between;
    img{
      width: 40px;
      cursor:pointer;
    }
  }
  
      .desktop{
        transition:.4s;
        padding:10px;
        width: 100%;
        background: #1167b3;
        display: flex;
        align-items:center;
        justify-content:center;
        ul{
          list-style-type:none;
          li{
            margin: 3px;
            text-align:center;
          }
          a{
            color: white;
            text-decoration:none;
          }
        }
      }

`;
