function afficher(){
			let tableau=document.querySelector('.monnaie');
			tableau.classList.add('monnaie_affiche');
			tableau.classList.remove('monnaie_cache');
		}

		function cacher(){
			let tableau=document.querySelector('.monnaie');
			tableau.classList.remove('monnaie_affiche');
			tableau.classList.add('monnaie_cache');
		}

		//window.onLoad=() => setTimeout(afficher,5000);
