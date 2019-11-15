<template>

	<div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<nav class="navbar navbar-expand-lg navbar-light bg-light">		 
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span class="navbar-toggler-icon"></span>
				</button> <a class="navbar-brand" href="#">Brand</a>
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="navbar-nav">
						<li class="nav-item active">
							 <a class="nav-link" href="#">Link <span class="sr-only">(current)</span></a>
						</li>
						<li class="nav-item">
							 <a class="nav-link" href="#">Link</a>
						</li>
						<li class="nav-item dropdown">
							 <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown">Dropdown link</a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								 <a class="dropdown-item" href="#">Action</a> <a class="dropdown-item" href="#">Another action</a> <a class="dropdown-item" href="#">Something else here</a>
								<div class="dropdown-divider">
								</div> <a class="dropdown-item" href="#">Separated link</a>
							</div>
						</li>
					</ul>
					<form class="form-inline">
						<input class="form-control mr-sm-2" type="text" /> 
						<button class="btn btn-primary my-2 my-sm-0" type="submit">
							Search
						</button>
					</form>
					<ul class="navbar-nav ml-md-auto">
						<li class="nav-item active">
							 <a class="nav-link" href="#">Link <span class="sr-only">(current)</span></a>
						</li>
						<li class="nav-item dropdown">
							 <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown">Dropdown link</a>
							<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
								 <a class="dropdown-item" href="#">Action</a> <a class="dropdown-item" href="#">Another action</a> <a class="dropdown-item" href="#">Something else here</a>
								<div class="dropdown-divider">
								</div> <a class="dropdown-item" href="#">Separated link</a>
							</div>
						</li>
					</ul>
				</div>
			</nav>
			<div class="carousel slide" id="carousel-318412">
				<ol class="carousel-indicators">
					<li data-slide-to="0" data-target="#carousel-318412" class="active">
					</li>
					<li data-slide-to="1" data-target="#carousel-318412">
					</li>
					<li data-slide-to="2" data-target="#carousel-318412">
					</li>
				</ol>
				<div class="carousel-inner">
					<div class="carousel-item active" >
						<img class="d-block w-100" style="height: 500px; " alt="Carousel Bootstrap First" src="https://www.youthvillage.co.za/wp-content/uploads/2016/06/find-phone.jpg" />
						<div class="carousel-caption">
							<h4>
								Welcome here Mr.{{ $route.params.userName}} 
							</h4>
							<p>
								Track and Access your Device Data Easily
							</p>
						</div>
					</div>
					
				</div> <a class="carousel-control-prev" href="#carousel-318412" data-slide="prev"><span class="carousel-control-prev-icon"></span> <span class="sr-only">Previous</span></a> <a class="carousel-control-next" href="#carousel-318412" data-slide="next"><span class="carousel-control-next-icon"></span> <span class="sr-only">Next</span></a>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12">
			<div class="row">
				<div class="col-md-6" id="map">

							<GmapMap
							:center="{lat:31.498033, lng:74.316215}"
							:zoom="14"
							style="width: 600px; height: 300px"
							>
							<GmapMarker
								:key="index"
								v-for="(m, index) in markers"
								:position="m.position"
								:clickable="true"
								:draggable="true"
								@click="center=m.position"
							/>
							</GmapMap>
				</div>
				<div class="col-md-3">
					 <span class="badge badge-default" id="statusLabel1"> </span>
					 <span class="badge badge-default" id="statusLabel2"> </span>
					 <span class="badge badge-default" id="statusLabel3"> </span>
					 <span class="badge badge-default" id="statusLabel4"> </span>
		
				</div>
				<div class="col-md-3">
					<img id="myImageView" style="height: 300px; width:300px" alt="Bootstrap Image Preview" src="https://us.123rf.com/450wm/mialima/mialima1603/mialima160300025/55096766-stock-vector-male-user-icon-isolated-on-a-white-background-account-avatar-for-web-user-profile-picture-unknown-ma.jpg?ver=6" />
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12">
			<h3>
				Perform Actions	
			</h3>
			<div class="row">
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-3">
							 
							<button type="button" style ="width: 150px" v-on:click="getLocation" class="btn btn-success">
								Get Location 
							</button>
						</div>
						<div class="col-md-3">
							<button type="button" style ="width: 150px" v-on:click="getCallLogs" class="btn btn-success">
								Get CallLogs
							</button>
						</div>
						<div class="col-md-3"> 
							<button type="button" style ="width: 150px" v-on:click="getContacts" class="btn btn-success">
								Get Contacts
							</button>
						</div>
						<div class="col-md-3">
							<button type="button" style ="width: 150px" v-on:click="getMobileStatus" class="btn btn-success">
								Get MobStatus
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-3">						 
							<button type="button" style ="width: 150px" v-on:click="getImage" class="btn btn-success">
								GetImage
							</button>
						</div>
						<div class="col-md-3">
							<button type="button" style ="width: 150px" v-on:click="getRecording" class="btn btn-success">
								Get Recording
							</button>
						</div>
						<div class="col-md-3">
							<button type="button" style ="width: 150px" v-on:click="getSMS" class="btn btn-success">
								Get SMS
							</button>
						</div>
						<div class="col-md-3">
							<button type="button" style ="width: 150px" class="btn btn-success">
								Start Ring
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>

</template>



<script>

import firebase from '../services/database';


var latitude = 0.0;
var longitude = 0.0;

export default {
	
data(){
	return {

		center: {lat: 31.498033, lng: 74.316215},
		markers: [
			{
				position: {lat: 31.498033, lng: 74.316215}
			//	position: {lat: 31.5489168, lng: 74.3257591}
			}		]
	}
},
firebase:{

		names: firebase.database().ref("names")
},

methods:{

		getLocation(){
			var ref = firebase.database().ref().child("Locations").child(this.$route.params.userName);
				ref.on("value", function(snapshot) {

					latitude = parseFloat(snapshot.val().latitude);
					longitude = parseFloat( snapshot.val().longitude);
					var address = snapshot.val().address;
					console.log("LAT: "+latitude+"   LONG: "+longitude+"   Address: "+address);
			

			}, function (error) {
				console.log("Error: " + error.code);
				});
		}
		,
		getContacts(){
			var ref = firebase.database().ref().child("Contacts").child(this.$route.params.userName);
				ref.on("value", function(snapshot) {
				
					var contacts = snapshot.val();
					var lowkey      = Object.keys(contacts);

						for( var i=0 ; i< lowkey.length; i++){

							var k = lowkey[i];
							var contact_name = contacts[k].contactname;
							var contact_numb = contacts[k].contactnnumber;

							console.log("Name: "+contact_name+"   		Contact Number: "+contact_numb);
						}


				}, function (error) {

				console.log("Error: " + error.code);
				});
		},
		getMobileStatus(){
		
		var ref = firebase.database().ref().child("MobileStatus").child(this.$route.params.userName);
				ref.on("value", function(data) {
				console.log(data.val());

			document.getElementById("statusLabel1").innerHTML  = "Battery Level: "+data.val().batterylevel ;
			document.getElementById("statusLabel2").innerHTML  = "Network: "+data.val().networkavaiable ;
			document.getElementById("statusLabel3").innerHTML  = "Sim Available: "+data.val().simavailable ;
			document.getElementById("statusLabel4").innerHTML  = "SimId: "+data.val().simid ;

				}, function (error) {
				console.log("Error: " + error.code);
				});
		
		},
		getCallLogs(){

			var ref = firebase.database().ref().child("CallLogs").child(this.$route.params.userName);
				ref.on("value", function(snapshot) {

					var callLogs = snapshot.val();
					var lowkey      = Object.keys(callLogs);

						for( var i=0 ; i< lowkey.length; i++){

							var k = lowkey[i];
							var call_date     = callLogs[k].calldate;
							var call_duration = callLogs[k].callduration;
							var call_dir 	  = callLogs[k].dir;
							var call_phoneno  = callLogs[k].phoneno;

							console.log("Date: "+call_date+"   duration: "+call_duration+"sec   Dir: "+call_dir+"   Phone: "+call_phoneno);
						}

		
		
				}, function (error) {
				console.log("Error: " + error.code);
				});
			
		},

		getImage(){

		var userName = this.$route.params.userName;
		 var storageRef = firebase.storage().ref();
		 var pathReference = storageRef.child(userName+'/profile.jpg');
		
		storageRef.child(userName+'/profile.jpg').getDownloadURL().then(function(url) {
			 
		var img = document.getElementById('myImageView');
  		img.src = url;

         }).catch(function(error) {

         });

		},

		getRecording(){


		var userName = this.$route.params.userName;
		//var userName = 'fahad';
		var storageRef = firebase.storage().ref();
		 var pathReference = storageRef.child('Audio Files/'+userName+'/New_Recorded_file.3gp');
		
		console.log(pathReference);
		storageRef.child('Audio Files/'+userName+'/New_Recorded_file.3gp').getDownloadURL().then(function(url){
		
				console.log("DownLoad Audio "+url);

         }).catch(function(error) {

         });

		},

		getSMS(){
			
			var smsRef = firebase.database().ref().child('SmsData').child(this.$route.params.userName);

			smsRef.on('value', function(snapshot){

				var key = Object.keys(snapshot.val());
			
			//OuterLoop Getting PhoneNo from Inbox
				for(var i = 0; i<key.length;i++ ){
				
				//console.log(key[i]);
				var InboxSmsRef = smsRef.child(key[i]) ;
				InboxSmsRef.on("value", function(snapshot) {

						var sms    = snapshot.val();
						var lowKey = Object.keys(sms);

				for(var j = 0 ; j<lowKey.length; j++){

				var k = lowKey[j];
				var smsnumber = sms[k].number;
				var smsbody	  = sms[k].body;

				console.log("Number: "+smsnumber+"  Body: "+smsbody);


				}

					
				
				}, function (error) {
				console.log("Error: " + error.code);
				});

				//Inner Loop will get Message of that number



				}

			}, function(err){
				console.log(err);
			})
		}
		
		
		
}

}
</script>


<style scoped>

</style>