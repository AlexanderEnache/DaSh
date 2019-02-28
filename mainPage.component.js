"use strict";

const mainPage = {
	
	template: `
	
		<form class="mainPage" ng-submit="$ctrl.Start()" form class="mainPage">
			<h2 class="mainTitle">DaSh</h2>
			
			<div class="Ctrls">
			<!--<p class="inst">Controls!</p>-->
					<button disabled class="U Q"><i class="fas fa-arrow-up"></i></button>
					<div class="bottomArrow">
						<button disabled class="L Q"><i class="fas fa-arrow-left"></i></button>
						<button disabled class="L Q"><i class="fas fa-arrow-down"></i></button>
						<button disabled class="L Q"><i class="fas fa-arrow-right"></i></button>
					</div>
			</div>
			
			<!--<div class="playMes">
				<p class="playPar">Play to: </p>
				<input ng-model="$ctrl.until" class="playUntil" type="number" name="quantity" min="1" max="99">
			</div>-->
			
			<button class="startButton">Play!</button>
		</form>
	
	`,
	
	controller:["$location", "Service", function($location, Service){
		
		this.until = 3;
		
		this.Start = () => {
			
		Service.setUntil(this.until);
			$location.path("/play");
		}
		
	}]
	
}

angular.module("App").component("mainPage", mainPage);
