import React,  { useEffect } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

// Componente - bloco isolado de HTML, CSS e JS, o qual não intefere no restante da aplicação
// Propriedade: Informações que um componente PAI passa para o componente FILHO
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)

function App() {

	useEffect(() =>{
		navigator.geolocation.getCurrentPosition(
			(position) => {
				const {latitude, longitude} = position.coords;

				
			},
			(error) =>{
				console.log(error);
			},
			{
				timeout: 30000
			}
		)
	}, []);



	return (
		<div id="app">
			<aside>
				<strong>Cadastrar</strong>
				<form>
					<div className="input-block">
						<label htmlFor="username-github">Usuário do GitHub</label>
						<input name="github_username" id="username-github" required/>
					</div>

					<div className="input-block">
						<label htmlFor="techs">Tecnologias</label>
						<input name="techs" id="techs" required/>
					</div>

					<div className="input-group">
						<div className="input-block">
							<label htmlFor="latitude">Latitude</label>
							<input name="latitude" id="latitude" required/>
						</div>

						<div className="input-block">
							<label htmlFor="longitude">Longitude</label>
							<input name="longitude" id="longitude" required/>
						</div>
					</div>

					<button type="submit">Salvar</button>
				</form>
			</aside>
			<main>
				<ul>
					<li className="dev-item">
						<header>
							<img src="https://avatars0.githubusercontent.com/u/40304152?s=460&v=4" alt="Kelvin Ronaldo"/>
							<div className="user-info">
								<strong>Kelvin Ronaldo</strong>
								<span>Java, ReactJS, C</span>
							</div>
						</header>
						<p>Desenvolvedor de Softwares e entusiasta da tecnologia. Amo inovações em qualquer que seja a área e também curto jogar videogames de vez em quando! XD</p>
						<a href="https://github.com/KelvinRonaldo">Acessar Perfil no GitHub</a>
					</li>
				</ul>
			</main>
		</div>
	);
}

export default App;
