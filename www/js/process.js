let process = {
	menu:function(){
		let content = 
		<div><center><h1>Lutong Pinoy Recipe</h1><h2>Pinoy Foods</h2>
			<div><a href='#' class="button button-big button-fill button-raised color-green" onClick={process.Appetizer}>Appetizer</a></div>
			<div><a href='#' class="button button-big button-fill button-raised color-teal" onClick={process.Seafood}>Seafood</a></div>
			<div><a href='#' class="button button-big button-fill button-raised color-green" onClick={process.Dessert}>Dessert</a></div>
			<div><a href='#' class="button button-big button-fill button-raised color-teal" onClick={process.Fried}>Fried</a></div>
			<div><a href='#' class="button button-big button-fill button-raised color-green" onClick={process.Vegetable}>Vegetable</a></div>		
		</center></div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	Appetizer:function(){
		let content =
		<div class="views">
            <div class="view view-main">
                <div class="pages">
					<div class="page-content">
            
				<a href='#' class="button button-big button-fill button-raised color-green" onClick={process.menu}>HOME</a>
			
				<center><h3>List of Recipes</h3><br/></center>
				
				<center>
				<div class="col-auto tablet-auto"><img src="img/api/CornedBeef.jpg"/></div>
				</center>
				<div><p>Corned Beef Guisado Recipe<br/><br/></p></div>
				
				<p><center><img src="img/api/CornedBeefIng.jpg"/></center></p>
				
				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/api/AdoboSteak.jpg"/></div>
				</center>
				<div><p>Adobo Steak Recipe<br/><br/></p></div>
				
				<p><center><img src="img/api/AdoboSteakIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/api/Afritada.jpg"/></div>
				</center>
				<div><p>Easy Pork Afritada Recipe<br/><br/></p></div>
				
				<p><center><img src="img/api/AfritadaIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/api/BasicPorkAdobo.jpg"/></div>
				</center>
				<div><p>Basic Pork Adobo Recipe<br/><br/></p></div>
				
				<p><center><img src="img/api/BasicPorkAdoboIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/api/BatangasBulalo.jpg"/></div>
				</center>
				<div><p>Batangas Bulalo Recipe<br/><br/></p></div>
				
				<p><center><img src="img/api/BatangasBulaloIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/api/BeefBicolExpress.jpg"/></div>
				</center>
				<div><p>Beef Bicol Express Recipe<br/><br/></p></div>
				
				<p><center><img src="img/api/BeefBicolExpressIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/api/BeefCurry.jpg"/></div>
				</center>
				<div><p>Beef Curry Recipe<br/><br/></p></div>
				
				<p><center><img src="img/api/BeefCurryIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/api/BeefKaldereta.jpg"/></div>
				</center>
				<div><p>Beef Kaldereta Recipe<br/><br/></p></div>
				
				<p><center><img src="img/api/BeefKalderetaIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/api/Binagoongan.jpg"/></div>
				</center>
				<div><p>Binagoongan Recipe<br/><br/></p></div>
				
				<p><center><img src="img/api/BinagoonganIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/api/ChickenFeet.jpg"/></div>
				</center>
				<div><p>Chicken Feet Recipe<br/><br/></p></div>
				
				<p><center><img src="img/api/ChickenFeetIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				
				<a href='#' class="button button-big button-fill button-raised color-green" onClick={process.menu}>BACK</a>
					</div>
				</div>
			</div>
		</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	Seafood:function(){
		let content = 
		<div class="views">
            <div class="view view-main">
                <div class="pages">
					<div class="page-content">

				<a href='#' class="button button-big button-fill button-raised color-teal" onClick={process.menu}>HOME</a>

				<center><h3>List of Recipes</h3><br/></center>
				
				<center>
				<div class="col-auto tablet-auto"><img src="img/sea/Tahong.jpg"/></div>
				</center>
				<div><p>Baked Tahong Recipe<br/><br/></p></div>
				
				<p><center><img src="img/sea/TahongIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/sea/AdobongPusit.jpg"/></div>
				</center>
				<div><p>Adobong Pusit Recipe<br/><br/></p></div>
				
				<p><center><img src="img/sea/AdobongPusitIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/sea/SeafoodPasta.jpg"/></div>
				</center>
				<div><p>Creamy Seafood Pasta Recipe<br/><br/></p></div>
				
				<p><center><img src="img/sea/SeafoodPastaIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/sea/GinataangGalunggong.jpg"/></div>
				</center>
				<div><p>Ginataang Galunggong Recipe<br/><br/></p></div>
				
				<p><center><img src="img/sea/GinataangGalunggongIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/sea/BangusSisig.jpg"/></div>
				</center>
				<div><p>Bangus Sisig Recipe<br/><br/></p></div>
				
				<p><center><img src="img/sea/BangusSisigIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/sea/sisig.jpg"/></div>
				</center>
				<div><p>Sizzling Tuna Sisig Recipe<br/><br/></p></div>
				
				<p><center><img src="img/sea/sisigIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/sea/PaksiwnaIsda.jpg"/></div>
				</center>
				<div><p>Paksiw na Isda Recipe<br/><br/></p></div>
				
				<p><center><img src="img/sea/PaksiwnaIsdaIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/sea/SeafoodSinigang.jpg"/></div>
				</center>
				<div><p>Seafood Sinigang Recipe<br/><br/></p></div>
				
				<p><center><img src="img/sea/SeafoodSinigangIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/sea/GinisangSardinas.jpg"/></div>
				</center>
				<div><p>Ginisang Sardinas Recipe<br/><br/></p></div>
				
				<p><center><img src="img/sea/GinisangSardinasIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/sea/InihawnaBangus.jpg"/></div>
				</center>
				<div><p>Inihaw na Bangus Recipe<br/><br/></p></div>
				
				<p><center><img src="img/sea/InihawnaBangusIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<a href='#' class="button button-big button-fill button-raised color-teal" onClick={process.menu}>BACK</a>
					</div>
				</div>
			</div>
		</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	Dessert:function(){
		let content = 
	<div class="views">
            <div class="view view-main">
                <div class="pages">
					<div class="page-content">

				<a href='#' class="button button-big button-fill button-raised color-green" onClick={process.menu}>HOME</a>
			<div>

				<center><h3>List of Recipes</h3><br/></center>
				
				<center>
				<div class="col-auto tablet-auto"><img src="img/des/BukoSalad.jpg"/></div>
				</center>
				<div><p>Buko Salad Recipe<br/><br/></p></div>
				
				<p><center><img src="img/des/BukoSaladIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/des/puto.jpg"/></div>
				</center>
				<div><p>Buttered Puto Recipe<br/><br/></p></div>
				
				<p><center><img src="img/des/putoIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/des/espasol.jpg"/></div>
				</center>
				<div><p>Espasol Recipe<br/><br/></p></div>
				
				<p><center><img src="img/des/espasolIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/des/ChocolateFudgeBrowniesRecipe.jpg"/></div>
				</center>
				<div><p>Chocolate Fudge Brownies Recipe<br/><br/></p></div>
				
				<p><center><img src="img/des/ChocolateFudgeBrowniesRecipeIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/des/kutsinta.jpg"/></div>
				</center>
				<div><p>Kutsinta Recipe<br/><br/></p></div>
				
				<p><center><img src="img/des/kutsintaIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/des/LecheFlan.jpg"/></div>
				</center>
				<div><p>Leche Flan Recipe<br/><br/></p></div>
				
				<p><center><img src="img/des/LecheFlanIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/des/Yema.jpg"/></div>
				</center>
				<div><p>Yema Recipe<br/><br/></p></div>
				
				<p><center><img src="img/des/YemaIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/des/KamoteCue.jpg"/></div>
				</center>
				<div><p>Kamote Cue Recipe<br/><br/></p></div>
				
				<p><center><img src="img/des/KamoteCueIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/des/MinatamisnaSaging.jpg"/></div>
				</center>
				<div><p>Minatamis na Saging Recipe<br/><br/></p></div>
				
				<p><center><img src="img/des/MinatamisnaSagingIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/des/UbeHalaya.jpg"/></div>
				</center>
				<div><p>Ube Halaya Recipe<br/><br/></p></div>
				
				<p><center><img src="img/des/UbeHalayaIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<a href='#' class="button button-big button-fill button-raised color-green" onClick={process.menu}>BACK</a>

						</div>
					</div>
				</div>
			</div>
		</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	Fried:function(){
		let content =
		<div class="views">
            <div class="view view-main">
                <div class="pages">
					<div class="page-content">
            
				<a href='#' class="button button-big button-fill button-raised color-teal" onClick={process.menu}>HOME</a>
			
				<center><h3>List of Recipes</h3><br/></center>
				
				<center>
				<div class="col-auto tablet-auto"><img src="img/fri/buffalowings.jpg"/></div>
				</center>
				<div><p>Buffalo Chicken Wings Recipe<br/><br/></p></div>
				
				<p><center><img src="img/fri/buffalowingsIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/fri/calamares.jpg"/></div>
				</center>
				<div><p>Calamares Recipe<br/><br/></p></div>
				
				<p><center><img src="img/fri/calamaresIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/fri/ChicharonBulaklak.jpg"/></div>
				</center>
				<div><p>Chicharon Bulaklak Recipe<br/><br/></p></div>
				
				<p><center><img src="img/fri/ChicharonBulaklakIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/fri/dynamitelumpia.jpg"/></div>
				</center>
				<div><p>Dynamite Lumpia Recipe<br/><br/></p></div>
				
				<p><center><img src="img/fri/dynamitelumpiaIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/fri/Embutido.jpg"/></div>
				</center>
				<div><p>Embutido Recipe<br/><br/></p></div>
				
				<p><center><img src="img/fri/ebutidoIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/fri/Ham.jpg"/></div>
				</center>
				<div><p>Fried Ham and Cheese Roll Recipe<br/><br/></p></div>
				
				<p><center><img src="img/fri/HamIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/fri/Longganisa.jpg"/></div>
				</center>
				<div><p>Longganisa Recipe<br/><br/></p></div>
				
				<p><center><img src="img/fri/LongganisaIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/fri/Nuggets.jpg"/></div>
				</center>
				<div><p>Nuggets Recipe<br/><br/></p></div>
				
				<p><center><img src="img/fri/NuggetsIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/fri/PorkChop.jpg"/></div>
				</center>
				<div><p>Pork Chop Recipe<br/><br/></p></div>
				
				<p><center><img src="img/fri/PorkChopIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/fri/Tilapia.jpg"/></div>
				</center>
				<div><p>Crispy Tilapia Sticks Recipe<br/><br/></p></div>
				
				<p><center><img src="img/fri/TilapiaIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<a href='#' class="button button-big button-fill button-raised color-teal" onClick={process.menu}>BACK</a>
				
				
					</div>
				</div>
			</div>
		</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	Vegetable:function(){
		let content =
		<div class="views">
            <div class="view view-main">
                <div class="pages">
					<div class="page-content">
            
				<a href='#' class="button button-big button-fill button-raised color-green" onClick={process.menu}>HOME</a>
			
				<center><h3>List of Recipes</h3><br/></center>
				
				<center>
				<div class="col-auto tablet-auto"><img src="img/veg/ChopsueywithQuailEggs.jpg"/></div>
				</center>
				<div><p>Chopsuey with Quail Eggs Recipe<br/><br/></p></div>
				
				<p><center><img src="img/veg/ChopsueywithQuailEggsIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/veg/Dinengdeng.jpg"/></div>
				</center>
				<div><p>Dinengdeng Recipe<br/><br/></p></div>
				
				<p><center><img src="img/veg/DinengdengIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/veg/GinataangSitawatKalabasawithCrabs.jpg"/></div>
				</center>
				<div><p>Ginataang Sitaw at Kalabasa with Crabs Recipe<br/><br/></p></div>
				
				<p><center><img src="img/veg/GinataangSitawatKalabasawithCrabsIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/veg/ginisangampalaya.jpg"/></div>
				</center>
				<div><p>Ginisang Ampalaya Recipe<br/><br/></p></div>
				
				<p><center><img src="img/veg/ginisangampalayaIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/veg/ginisanggulayrecipe.jpg"/></div>
				</center>
				<div><p>Ginisang Gulay Recipe<br/><br/></p></div>
				
				<p><center><img src="img/veg/ginisanggulayrecipeIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/veg/GinisangMonngowithDilisRecipe.jpg"/></div>
				</center>
				<div><p>Ginisang Monngo with Dilis Recipe<br/><br/></p></div>
				
				<p><center><img src="img/veg/GinisangMonngowithDilisRecipeIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/veg/AdobongKangkong.jpg"/></div>
				</center>
				<div><p>Adobong Kangkong Recipe<br/><br/></p></div>
				
				<p><center><img src="img/veg/AdobongKangkongIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/veg/BasicTortangTalong.jpg"/></div>
				</center>
				<div><p>Basic Tortang Talong Recipe<br/><br/></p></div>
				
				<p><center><img src="img/veg/BasicTortangTalongIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/veg/AnghangSarapLaingwithShrimp.jpg"/></div>
				</center>
				<div><p>Anghang Sarap Laing with Shrimp Recipe<br/><br/></p></div>
				
				<p><center><img src="img/veg/AnghangSarapLaingwithShrimpIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<center>
				<div class="col-auto tablet-auto"><img src="img/veg/Binatog.jpg"/></div>
				</center>
				<div><p>Binatog Recipe<br/><br/></p></div>
				
				<p><center><img src="img/veg/BinatogIng.jpg"/></center></p>

				<p>🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴🍴</p><br/>

				<a href='#' class="button button-big button-fill button-raised color-green" onClick={process.menu}>BACK</a>

				
				
					</div>
				</div>
			</div>
		</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},

		loading:function(){
		let content = <div>
					Loading...
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
	}
}

process.loading();
setTimeout(function(){
	process.menu();
},1);