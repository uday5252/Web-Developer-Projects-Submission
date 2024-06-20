Weather Forecast Application .

Developed by using HTML, CSS and JS also with the help of Weather remote API JSON formatted data.

Handling of the Data (try and catch)=> 
The JSON formatted Weather API data is feateched into JS file using feath() and also providing 
custom city Name to API link and generated JSON weather data of the perticular city, after converting Json data
to JS Object using .json() also checking the responce of the API link data, if responce is ok return data else 
return error message. These cheking has been exeuted by "try and catch" blocks if error is generated in try block 
it will automatically jumped to catch block and it will return error message as "City Not Found".

features => 
1. The weather data can't displayed untill and unless the City Name is correct.
2. The default temerature unit type is "Celcius", You can chenge to "Farenheit" if you want.
3. Manange Cities feature is included, you can add multiple cities in it.
4. In Manage Cities first city will always connected with home page weather data also the data may varies 
    with respect to it.
5. You can also clear all the Cities List in Manage Cities excepet First City.

This wep-page is 95% Responsive.