$(document).ready(function () {
    $("#addVaraButton").click(function () {
        $("#addVara").append(`
<div id="vara">
    <label for="esemeNimetus">Eseme nimetus</label>
    <input type="text" id="esemeNimetus" name="esemeNimetus" />
    <br>
    <label for="varaLukustatud">Vara oli lukustatud ruumis</label>
    <input id="varaLukustatud" name="varaLukustatud" type="checkbox">
    <br>
    <label for="soetamiseAasta">Soetamise aasta</label>
    <input type="number" min="1500" max="2017" step="1" value="2017" id="soetamiseAasta" name="soetamiseAasta" />
    <br>
    <label for="value">Ligikaudne hetkeväärtus</label>
    <input type="number" min="0" max="10000000" step="1" value="0" id="value" name="value" /> €
    <br>
    <label for="varaOlemas">Vara valdus olemas</label>
    <input type="datetime-local" id="varaOlemas" name="varaOlemas" />
    <br>
    <label for="varaOlemas">Vara valdus olemas</label>
    <input type="datetime-local" id="varaOlemas" name="varaOlemas" />
    <br>
    <label for="eritunnused">Tundemärgid ja eritunnused</label>
    <textarea id="eritunnused" rows="3" name="eritunnused" placeholder="Kirjuta siia..."></textarea>
    <button id="removeVaraButton" type="button">Eemalda vara</button>
</div>
`);
    });

    $('body').on('click', '#removeVaraButton', function () {
        $(this).closest('div').remove();
    });
});
