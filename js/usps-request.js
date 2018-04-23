function Request(){
	function reqListener () {
		console.log(this.responseText);
		document.getElementById("Validation").innerHTML = this.responseText; 
	}
	var oReq = new XMLHttpRequest();
	oReq.addEventListener("load", reqListener);
	console.log(document.getElementById("street-address").value);
	console.log(document.getElementById("zip").value);
	console.log(document.getElementById("city").value);
	console.log(document.getElementById("state").value);
	oReq.open("GET", 'https://secure.shippingapis.com/ShippingAPI.dll?API=Verify&XML=<AddressValidateRequest USERID="365SCHOO5498"><Revision>1</Revision><Address ID="0"><Address1>'+ document.getElementById("street-address").value+ '</Address1><Address2></Address2><City>'+ document.getElementById("city").value+ '</City><State>'+ document.getElementById("state").value+ '</State><Zip5>'+ document.getElementById("zip").value+ '</Zip5><Zip4></Zip4></Address></AddressValidateRequest>');
	oReq.send();
	return false;
}