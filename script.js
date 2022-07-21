
const Main = document.querySelector(".main");

Alerta ();

function Alerta () {
  alert("ESSA PAGINA É FALSA");
  MainPage ();
}

function MainPage () {

    Main.innerHTML = 
    `
<div class="page">
    <nav >
        <div class="Navi-top">
            <img onclick="PaginaLogin()" src="./imgs/navMenu.jpg"/>
            <a href="https://Globo.com">
                <img src="https://s3.glbimg.com/v1/AUTH_fd78dc4be9404a2e92b908ade306e9e6/prod/header_svgs/header-grid-logo.svg"/>
            </a>
            <img onclick="PaginaLogin()" src="./imgs/Login.jpg"/>
        </div>
        <div class="menu">
            <h2 class="vermelho"><a href="https://www.globo.com">g1</a></h2>
            <h2 class="azul"><a href="https://www.globo.com">o globe</a></h2>
            <h2 class="verde-escuro"><a href="https://www.globo.com">valor</a></h2>
            <h2 class="verde"><a href="https://www.globo.com">ge</a></h2>
            <h2 class="laranja-escuro"><a href="https://www.globo.com">cartola</a></h2>
            <h2 class="vermelho-claro"><a href="https://www.globo.com">globoplay</a></h2>
            <h2 class="laranja-escuro"><a href="https://www.globo.com">gshow</a></h2>
            <h2 class=" "><a href="https://www.globo.com">quem</a></h2>
            <h2 class="roxo"><a href="https://www.globo.com">receitas</a></h2>
            <h2 class="verde-marinho"><a href="https://www.globo.com">giga gloob</a></h2>
        </div>
    </nav>
    <div class="add">
        <img onclick="getFishes()" src="https://previews.123rf.com/images/seamartini/seamartini1810/seamartini181000786/110426824-fishing-store-advertisement-retro-poster-rod-hooks-and-baits-big-fish-catch-vector-fisherman-tackles.jpg"/>
    </div>
    <div class="container">
        <div class="lefttop">
            <a href="https://Globo.com">
              <h1 class="materiamain">
                Vacinados entrarão nos EUA sem quarentena a partir de 8 de
                novembro
              </h1>
              <p class="materiasecundaria">
                Ministros lavam a mão sobre bolsonaro não se vacinar, relata
                blog bandeiras em frente ao congresso lembram 600 mil
                brasileiros mortos
              </p>
            </a>
        </div>
        <div class="leftbottom">
            <div class="ComImagens">
              <div>
                <a href="https://Globo.com">
                  <img src="https://qxpidu.csb.app/presidente.jpeg" />
                  <h1>Além do presidente</h1>
                  <strong
                    >CPI deve pedir indicamento de filhos de Bolsonaro</strong
                  >
                  <p>A evangélicos, Bolsonaro diz 'chorar sozinho em casa'</p>
                </a>
              </div>
              <div>
                <a href="https://Globo.com">
                  <img src="https://qxpidu.csb.app/crimes.jpeg" />
                  <h1>Crimes na fronteira</h1>
                  <strong
                    >Triângulo amoroso vira chave em linha de
                    investigação</strong
                  >
                  <p>1ª de 7 mortes entre Brasil e Paraguai faz 1 semana</p>
                </a>
              </div>
              <div>
                <a href="https://Globo.com">
                  <img src="https://qxpidu.csb.app/reino.jpeg" />
                  <h1>Além do presidente</h1>
                  <strong
                    >Parlamentar inglês é esfaqueado e morto em igreja</strong
                  >
                  <p>Homem de 25 anos foi preso no local, diz polícia</p>
                </a>
              </div>
            </div>
            <div class="SemImagens">
              <div>
                <a href="https://Globo.com">
                  <h1>Sabatinada de Mendoça</h1>
                  <strong
                    >PGR é consultada sobre investigação contra
                    Alcolumbre</strong
                  >
                  <p>Aliados dizem que situação de Alcolumbre 'está feia'</p>
                </a>
              </div>
              <div>
                <a href="https://Globo.com">
                  <h1>Negócio de R$ 5,2 bi</h1>
                  <strong
                    >Pão de Açúcar vende 71 pontos do Extra para Assaí
                  </strong>
                  <p>Lembre fusões e aquisições bilionárias recentes no país</p>
                </a>
              </div>
              <div>
                <a href="https://Globo.com">
                  <h1>Elo com caminhoneiros</h1>
                  <strong
                    >Podcast: ministro liga empresários a atos de 7/9;
                    ouça</strong
                  >
                  <p>Neto de jango critica veto de Bolsonaro a tributo</p>
                </a>
              </div>
          </div>
        </div>
        <div class="right">
            <div class="right1">
              <div class="cell">
                <a href="https://Globo.com">
                  <img src="https://qxpidu.csb.app/espiao.jpeg" />
                  <h1>Espião estatístico</h1>
                  <strong
                    >Classificação do returno tem Palmeiras em último; veja as
                    posições
                  </strong>
                  <p>Crespo almoã com diretoria e deve se despedir no CT</p>
                </a>
              </div>
              <div class="cell">
                <a href="https://Globo.com">
                  <img src="https://qxpidu.csb.app/greve.jpeg" />
                  <h1>Greve segue na Raposa</h1>
                  <strong
                    >Cruzeiro não viabiliza recurso para quitar atrasados
                  </strong>
                </a>
              </div>
              <div class="cell">
                <a href="https://Globo.com">
                  <img src="https://qxpidu.csb.app/campeonato.jpeg" />
                  <h1>Campeonato francês</h1>
                  <strong>Desfalcado,PSG recebe o Angers, 4°</strong>
                </a>
              </div>
            </div>
            <div class="right2">
              <div class="cell">
                <a href="https://Globo.com">
                  <img src="https://qxpidu.csb.app/ferias.jpeg" />
                  <h1>Férias e JH</h1>
                  <strong>César Tralli se emociona na despedida do SP1</strong>
                </a>
              </div>
              <div class="cell">
                <a href="https://Globo.com">
                  <img src="https://qxpidu.csb.app/verdades.jpeg" />
                  <h1>Verdades Sceretas 2</h1>
                  <strong>
                    Angela cruza a passarela poderosa; reveja desfiles
                  </strong>
                  <p>
                    Blanche terá dois relacionamentos
                  </p>
                  <p>
                    gaiel viverá sadomasoquista
                  </p>
                </a>
              </div>
              <div class="cell">
                <img src="https://qxpidu.csb.app/nos-tempos.jpeg" />
                <a href="https://Globo.com">
                  
                  <h1>Nos Tempos do Imperador</h1>
                  <strong>
                    Lota vai cair em golpe
                  </strong>
                  <p>Teresa toma decisão radical</p>
                </a>
              </div>
            </div>
        </div>
    </div>
</div>
    `
}


function PaginaLogin () {

    Main.innerHTML = 
    `
<div class="page">
    <nav >
        <div class="Navi-top">
            <img onclick="PaginaLogin()" src="./imgs/navMenu.jpg"/>
            <a href="https://Globo.com">
                <img src="https://s3.glbimg.com/v1/AUTH_fd78dc4be9404a2e92b908ade306e9e6/prod/header_svgs/header-grid-logo.svg"/>
            </a>
            <img onclick="PaginaLogin()" src="./imgs/Login.jpg"/>
        </div>
        <div class="menu">
            <h2 class="vermelho"><a href="https://www.globo.com">g1</a></h2>
            <h2 class="azul"><a href="https://www.globo.com">o globe</a></h2>
            <h2 class="verde-escuro"><a href="https://www.globo.com">valor</a></h2>
            <h2 class="verde"><a href="https://www.globo.com">ge</a></h2>
            <h2 class="laranja-escuro"><a href="https://www.globo.com">cartola</a></h2>
            <h2 class="vermelho-claro"><a href="https://www.globo.com">globoplay</a></h2>
            <h2 class="laranja-escuro"><a href="https://www.globo.com">gshow</a></h2>
            <h2 class=" "><a href="https://www.globo.com">quem</a></h2>
            <h2 class="roxo"><a href="https://www.globo.com">receitas</a></h2>
            <h2 class="verde-marinho"><a href="https://www.globo.com">giga gloob</a></h2>
        </div>
    </nav>
    <Input required class="email" type="email" name="E-mail"></Input>
    <Input required class="password" type="password" name="Password"></Input>
    <Button onclick="signIn()">Login</Button>
    <Button onclick="PaginaSingUp()">Cadastrar-se</Button>
</div>
    `
}

function PaginaSingUp () {

  Main.innerHTML = 
  `
<div class="page">
  <nav >
      <div class="Navi-top">
          <img onclick="PaginaLogin()" src="./imgs/navMenu.jpg"/>
          <a href="https://Globo.com">
              <img src="https://s3.glbimg.com/v1/AUTH_fd78dc4be9404a2e92b908ade306e9e6/prod/header_svgs/header-grid-logo.svg"/>
          </a>
          <img onclick="PaginaLogin()" src="./imgs/Login.jpg"/>
      </div>
      <div class="menu">
          <h2 class="vermelho"><a href="https://www.globo.com">g1</a></h2>
          <h2 class="azul"><a href="https://www.globo.com">o globe</a></h2>
          <h2 class="verde-escuro"><a href="https://www.globo.com">valor</a></h2>
          <h2 class="verde"><a href="https://www.globo.com">ge</a></h2>
          <h2 class="laranja-escuro"><a href="https://www.globo.com">cartola</a></h2>
          <h2 class="vermelho-claro"><a href="https://www.globo.com">globoplay</a></h2>
          <h2 class="laranja-escuro"><a href="https://www.globo.com">gshow</a></h2>
          <h2 class=" "><a href="https://www.globo.com">quem</a></h2>
          <h2 class="roxo"><a href="https://www.globo.com">receitas</a></h2>
          <h2 class="verde-marinho"><a href="https://www.globo.com">giga gloob</a></h2>
      </div>
  </nav>
  <Input required class="fullName" type="text" name="Nome Completo"></Input>
  <Input required class="email" type="email" name="E-mail"></Input>
  <Input required class="password" type="password" name="Password"></Input>
  <Input required class="confirmPassword" type="confirmPassword" name="confirmPassword"></Input>
  <Input required class="birthDate" type="birthDate" name="Data de nascimento"></Input>
  <Button onclick="signUp()">Login</Button>
  <Button onclick="PaginaLogin()">Cadastrar-se</Button>
</div>
  `
}

function getFishes(event) {

  let promise = axios.get('https://globo-fishing.herokuapp.com/fishes');

  promise.then((response)=>{
    console.log(response.data);

  })

  promise.catch((err)=>{
      console.log(err);
  })
}


function signIn() {

  email = document.querySelector("input.email").value;
  password = document.querySelector("input.password").value;

  const URL = "https://globo-fishing.herokuapp.com/sign-in";
  const body = {email, password}

  let promise = axios.post(URL,body);

  promise.then(res => {
    window.location.href = "http://www.globo.com";
  });
  promise.catch(err => {
    alert(err);
  });
}

function signUp() {

  fullName = document.querySelector("input.fullName").value;
  email = document.querySelector("input.email").value;
  password = document.querySelector("input.password").value;
  confirmPassword = document.querySelector("input.confirmPassword").value;
  birthDate = document.querySelector("input.birthDate").value;

  const URL = "https://globo-fishing.herokuapp.com/sign-up";
  const body = {fullName, email, password, confirmPassword, birthDate}

  let promise = axios.post(URL,body);

  console.log(body)

  promise.then(res => {
    window.location.href = "http://www.globo.com";
  });
  promise.catch(err => {
    alert(err);
  });
}