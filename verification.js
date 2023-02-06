const signin = document.querySelector('#form');
const id = signin.querySelector('input[name="id"]');
const adress =signin.querySelector('input[name="adress"]');
const password = signin.querySelector('input[name="password"]');
const passwordconfirm = signin.querySelector('input[name="confirmpassword"]');
const nume = signin.querySelector('input[name="nume"]');
const country = signin.querySelector('input[name="country"]');
const limba = signin.querySelector('input[name="language"]');
const sex = signin.querySelector('input[name="sex"]');
const mail = signin.querySelector('input[name="mail"]');
const zipcode = signin.querySelector('input[name="zipcode"]');
const about = signin.querySelector('input[name="comment"]');

signin.addEventListener('submit', (event) => {
	valid = 1;
	event.preventDefault();
	valid &= verifySignIn();
	valid &= verifyPassword();
	valid &= verifyPasswordconfirm();
	valid &= verifyName();
	valid &= verifyCountry();
	valid &= verifyLimba();
	valid &= verifySex();
	valid &= verifyMail();
	valid &= verifyZipcode();
	if(valid == 1) {
		let string = "";
		string += "id:" + id.value;
		string += "\nname:" + nume.value;
		string += "\nadress:" + adress.value;
		string += "\ncountry:" + country.value;
		string += "\nzipcode:" + zipcode.value;
		string += "\nlanguage:" + limba.value;
		string += "\nsex:" + sex.value;
		string += "\nemail:" + mail.value;
		string += "\npassword:" + password.value;
		string += ((about != null) ? "\nabout you:" + about.value : "");
		alert(string);
	}
})

function verifySignIn() {
	if(id.value.trim() == '') {
		return sendNotOK(id, "Please provide an ID");
	}
	else if(id.value.trim().length < 5 || id.value.trim().length > 12) return sendNotOK(id, "ID should contain 5 to 12 characters");
	else if(id.value.charAt(0) != id.value.charAt(0).toUpperCase()) return sendNotOK(id, "Id should start with capital letter");
	else {
		var special = "|'\\@[]{}\,.!#$%^&*()<>?:;_+/~`-=";
		if(!special.includes(id.value.charAt(id.value.length-1))) return  sendNotOK(id, "Id should end with special character");
		else return sendOK(id);
	}
}
function verifyPassword() {
	if(password.value.trim() == '') {
		return sendNotOK(password, "Please provide a Password");
	}
	else if(password.value.trim().length < 12) return sendNotOK(password, "The password should contain at least 12 characaters");
	else if(password.value.trim().length >= 12 && password.value.trim().length < 14) {
		const dad = password.parentElement;
		if(dad.classList.contains('notok')) {
			dad.classList.remove('notok');
		}
		dad.classList.add('ok');
		const textnotok = dad.querySelector('p');
		textnotok.textContent = "We recomend 14 or more characters!";
		return 1;
	}
	else{
		var upper=0, lower=0, simbol=0, number=0;
		for(var i = 0; i < password.value.length; i++) {
			if(password.value.charAt(i) >= 'A' && password.value.charAt(i) <= 'Z') upper=1;
			else if(password.value.charAt(i) >= 'a' && password.value.charAt(i) <= 'z') lower=1;
			else if(password.value.charAt(i) >= '0' && password.value.charAt(i) <= '9') number=1;
			else simbol = 1;
		}

		if(upper == 0) return  sendNotOK(password, "Password must contain upper case letter");
		else{ if(lower == 0) return  sendNotOK(password, "Password must contain lower case letter");
		else if(number == 0)  return sendNotOK(password, "Password must contain number");
		else if(simbol == 0)  return sendNotOK(password, "Password must contain simbol");
		else return sendOK(password); }
	}
}
function verifyPasswordconfirm() {
	if(passwordconfirm.value.trim() == '') {
		return sendNotOK(passwordconfirm, "Please confirm Password");
	}
	else if(passwordconfirm.value.trim().length < 12) return sendNotOK(passwordconfirm, "The password should contain at least 12 characaters");
	else if(password.value != passwordconfirm.value)  return sendNotOK(passwordconfirm, "The passwords are not the same")
	else{
		var upper=0, lower=0, simbol=0, number=0;
		for(var i = 0; i < passwordconfirm.value.length; i++) {
			if(passwordconfirm.value.charAt(i) >= 'A' && passwordconfirm.value.charAt(i) <= 'Z') upper=1;
			else if(passwordconfirm.value.charAt(i) >= 'a' && passwordconfirm.value.charAt(i) <= 'z') lower=1;
			else if(passwordconfirm.value.charAt(i) >= '0' && passwordconfirm.value.charAt(i) <= '9') number=1;
			else simbol = 1;
		}

		if(upper == 0) return  sendNotOK(passwordconfirm, "Password must contain upper case letter");
		else{ if(lower == 0) return  sendNotOK(passwordconfirm, "Password must contain lower case letter");
		else if(number == 0) return  sendNotOK(passwordconfirm, "Password must contain number");
		else if(simbol == 0)  return sendNotOK(passwordconfirm, "Password must contain simbol");
		else return  sendOK(passwordconfirm); }
	}
}
function verifyName() {
	if(nume.value.trim() == '') {
		return sendNotOK(nume, "Please provide a name");
	}
	else {
		var ok = 0;
		for(var i = 0; i < nume.value.length; i++) {
			if((nume.value.charAt(i) < 'a' || nume.value.charAt(i) > 'z') && (nume.value.charAt(i) < 'A' || nume.value.charAt(i) > 'Z')) ok = 1;
		}
		if(ok == 1)  return sendNotOK(nume, "Name must contain only the alphabet ");
		else return sendOK(nume);
 	}
}
function verifyCountry() {
	if(country.value.trim() == '') {
		return sendNotOK(country, "Please provide a country");
	}
	else return sendOK(country);
}
function verifyLimba() {
	if(limba.value.trim() == '') {
		return sendNotOK(limba, "Please provide a language");
	}
	else return sendOK(limba);
}
function verifySex() {
	if(sex.value.trim() == '') {
		return sendNotOK(sex, "Please provide a sex");
	}
	else return sendOK(sex);
}
function verifyMail() {
	if(mail.value.trim() == '') {
		return sendNotOK(mail, "Please provide an Email");
	}
	else {
		let pos = 0, nr =0 ;
		for(let i=0; i < mail.value.length; i++) {
			if(mail.value.charAt(i) == '@') {
				pos = i;
				nr++;
			}
		}
		if(nr != 1 || mail.value.charAt(0) == '.' || mail.value.charAt(mail.value.length-1) == '.' || mail.value.charAt(0)=='@' || mail.value.charAt(mail.value.length-1) == '@')  return sendNotOK(mail, "Please provide an Email1");
		else {
			let ok = 0;
			for(let i = 0; i < pos-1; i++) {
				if(mail.value.charAt(i) == '.' && mail.value.charAt(i+1)) ok=1;
			}
			if(ok==1)  return sendNotOK(mail, "Please provide an Email2");
			let okk = 0;
			if(mail.value.charAt(pos)=='-' || mail.value.charAt(mail.value.length-1)=='-')  okk=1;
			let special = "|'\\@[]{}\,!#$%^&*()<>?:;_+/~`=", suntlitere = 0, punct = 0;
			for(let i=pos+1; i < mail.value.length; i++) {
				if(!special.includes(mail.value.charAt(i))) okk = 1;
				if((mail.value.charAt(i) >= 'a' && mail.value.charAt(i) <= 'z') || (mail.value.charAt(i) >= 'A' && mail.value.charAt(i) <= 'Z'))  suntlitere = 1;
				if(mail.value.charAt(i) == '.')  punct=1;
			}
			if(suntlitere == 0)  okk=1;
			if(punct == 0) okk=1;
			if(okk == 0)   return sendNotOK(mail, "Please provide an Email3");
			else return sendOK(mail);
		}
	}
}
function verifyZipcode() {
	if(zipcode.value.trim() == '') {
		return sendNotOK(zipcode, "Please provide a zipcode")
	}
	else if(zipcode.value.trim().length < 6 || zipcode.value.trim().length > 6) return sendNotOK(zipcode, "Please provide a valid zipcode");
	else {
		if(zipcode.value.charAt(0) < '0' || zipcode.value.charAt(0) > '9') return sendNotOK(zipcode, "Please provide a valid zipcode");
		else if(zipcode.value.charAt(1) < '0' || zipcode.value.charAt(1) > '9') return sendNotOK(zipcode, "Please provide a valid zipcode");
		else if(zipcode.value.charAt(2) < '0' || zipcode.value.charAt(2) > '9') return sendNotOK(zipcode, "Please provide a valid zipcode");
		else if(zipcode.value.charAt(3) < '0' || zipcode.value.charAt(3) > '9') return sendNotOK(zipcode, "Please provide a valid zipcode");
		else if(zipcode.value.charAt(4) < 'A' || zipcode.value.charAt(4) > 'Z') return sendNotOK(zipcode, "Please provide a valid zipcode");
		else if(zipcode.value.charAt(5) < 'A' || zipcode.value.charAt(5) > 'Z') return sendNotOK(zipcode, "Please provide a valid zipcode");
		else return sendOK(zipcode);
	}
}


function sendNotOK(el, text) {
	console.log("here");
	valid = 0;
	const dad = el.parentElement;
	if(dad.classList.contains('ok')) {
		dad.classList.remove('ok');
	}
	dad.classList.add('notok');
	const textnotok = dad.querySelector('p');
	textnotok.textContent = text;
	return 0;

}
function sendOK(el) {
	const dad = el.parentElement;
	if(dad.classList.contains('notok')) {
		dad.classList.remove('notok');
	}
	dad.classList.add('ok');
	const textnotok = dad.querySelector('p');
	textnotok.textContent = "Looks good!";
	return 1;
}

