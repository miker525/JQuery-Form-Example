$namecheck = 0;
$emailcheck = 0;
$agecheck = 0;
$humancheck = 0;
$phonecheck = 0;

$(document).ready(function() {
	$("input").bind('blur',function () {
    if (this.name === "name")
    {
		$name = this.value;
		$matches = $name.match(/\d+/g);
		if ($name && !/^[0-9]+$/.test($name) && !$matches)
		{
			$(this).css("border", "1px solid green");
			$namecheck = 1;
		}
		else 
		{
			$(this).css("border", "1px solid red"); 
			$namecheck = 0;
		}
    }
    else if (this.name === "email") 
	{
		//REGEX for email taken from the community wiki at http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
		$re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		$email = this.value;
		if ($re.test($email))
		{
			$(this).css("border", "1px solid green");
			$emailcheck = 1;
		}
		else
		{
			$(this).css("border", "1px solid red");
			$emailcheck = 0;
		} 
    }
	else if (this.name === "age")
	{
		$age = this.value;
		$numbers = /^\d+$/.test($age);
		if ($age && $age.length <= 2 && $numbers)
		{
			$(this).css("border", "1px solid green");
			$agecheck = 1;
		}
		else 
		{
			$(this).css("border", "1px solid red");
			$agecheck = 0;
		}
	}
	else if (this.name === "phone")
	{
		//REGEX For Phone taken from 'billbad' at http://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript
		$re = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
		$phone = this.value;
		if ($re.test($phone))
		{
			$(this).css("border", "1px solid green");
			$phonecheck = 1;
		}
		else
		{
			$(this).css("border", "1px solid red");
			$phonecheck = 0;
		} 
	}
	});
	
	$("select").bind('blur', function () {
    if (this.name === "question")
    {
        $youare = this.value;
		if ($youare === "Human")
		{
			$(this).css("border", "1px solid green");
			$humancheck = 1;
		}
		else
		{
			$(this).css("border", "1px solid red");
			$humancheck = 0;
		}
    }
	});	
	
});

function checkComplete()
	{
		if ($humancheck && $phonecheck && $emailcheck && $agecheck && $namecheck)
		{
			$('#errormsg').text("Success!!! You won! Congratulations! In JQuery!");
		}
		else
		{
			$('#errormsg').text("Wrong! Any errors are highlighted in red. Please fix these issues and try again!");
		}
	}