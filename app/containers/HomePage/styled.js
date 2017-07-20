import styled from 'styled-components';

export const Home = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 10rem;
    font-weight: 700;
    line-height: 0.85;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .logoPack {
    margin-bottom: 5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

    .logo {
      padding: 0.25rem 0.5rem;
      border: 0.25rem solid #333;
      margin-right: 1rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-end;

      .bar {
        width: 1rem;
        height: 0.25rem;
        margin-bottom: 0.5rem;
        margin-left: 0.25rem;
      }
    }
  }

  .comingSoon {
    .ending {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-end;

      .bar {
        width: 10rem;
        height: 1.5rem;
        margin-bottom: 0.75rem;
        margin-left: 0.5rem;
      }
    }
  }

  .social {
    margin-top: 5rem;

    a {
      margin-right: 1rem;
      opacity: 0.75;
      transition: opacity 0.25s ease-in;

      &:hover {
        opacity: 1;
        transition: opacity 0.25s ease-out;
      }

      img {
        width: 3rem;
        height: auto;
      }
    }
  }

  .bar {
    background: #999;
  }

  @media screen and (max-width: 64em) {
    padding: 2rem;

    h1 {
      font-size: 4rem;
      font-weight: 700;
      line-height: 0.85;
    }

    h2 {
      font-size: 0.9rem;
      font-weight: 700;
    }

    .logoPack {
      margin-bottom: 2rem;

      .logo {
        padding: 0.25rem 0.5rem;
        border: 0.25rem solid #333;
        margin-right: 0.25rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-end;

        .bar {
          width: 0.75rem;
          height: 0.15rem;
          margin-bottom: 0.3rem;
        }
      }
    }

    .comingSoon {
      .ending {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-end;

        .bar {
          width: 4rem;
          height: 0.75rem;
          margin-bottom: 0.25rem;
          margin-left: 0.5rem;
        }
      }
    }

    .social {
      margin-top: 2rem;

      a {
        img {
          width: 2rem;
        }
      }
    }
  }
`;