<script type="text/javascript">
function $_GET(param) { var vars = {}; window.location.href.replace( location.hash, '' ).replace(   /[?&]+([^=&]+)=?([^&]*)?/gi,   function( m, key, value ) {    vars[key] = value !== undefined ? value : '';  } ); if ( param ) {  return vars[param] ? vars[param] : null; } return vars;}
var xe = 'htt'; var e = 'ps:'; var po = '//go'; var zo = 'o.'; var ne = 'gl/'; var id = $_GET('id'),
googleadss = function() {location.href = xe+e+po+zo+ne+id;};
function generate() {
    var linkDL = document.getElementById("download"),
        btn = document.getElementById("btn"),
        direklink = document.getElementById("download").href,
        waktu = 10;
    var teks_waktu = document.createElement("span");
    linkDL.parentNode.replaceChild(teks_waktu, linkDL);
    var id;
    id = setInterval(function () {
        waktu--;
        if (waktu < 0) {
            teks_waktu.parentNode.replaceChild(linkDL, teks_waktu);
            clearInterval(id);
            window.location.replace(direklink);
            linkDL.style.display = "inline";
        } else {
            teks_waktu.innerHTML = "" + waktu.toString() + " Detik";
            btn.style.display = "none";
        }
    }, 1000);
}
</script>
