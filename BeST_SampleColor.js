app.preferences.rulerUnits = Units.PIXELS;


//Variable
var sampler = app.activeDocument.colorSamplers;
var pickLyr = app.activeDocument.layers.getByName("Picker");


//Script
pickLyr.visible = true;　//レイヤ表示
for ( var i = 0 ;  i < sampler.length; i++)
{
quickSel(sampler[i].position[0].value,sampler[i].position[1].value,0); //選択範囲
}
pickLyr.visible = false;　//レイヤ非表示
app.activeDocument.colorSamplers.removeAll();　//座標を消す


//Function
function quickSel (x, y, tol){
var idsetd = charIDToTypeID( "AddT" );
    var desc2 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref1 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref1.putProperty( idChnl, idfsel );
    desc2.putReference( idnull, ref1 );
    var idT = charIDToTypeID( "T   " );
        var desc3 = new ActionDescriptor();
        var idHrzn = charIDToTypeID( "Hrzn" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc3.putUnitDouble( idHrzn, idPxl, x );
        var idVrtc = charIDToTypeID( "Vrtc" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc3.putUnitDouble( idVrtc, idPxl, y);
    var idPnt = charIDToTypeID( "Pnt " );
    desc2.putObject( idT, idPnt, desc3 );
    var idTlrn = charIDToTypeID( "Tlrn" );
    desc2.putInteger( idTlrn, tol);
    var idAntA = charIDToTypeID( "AntA" );
    desc2.putBoolean( idAntA, true );
    var idCntg = charIDToTypeID( "Cntg" );
    desc2.putBoolean( idCntg, true );
    var idMrgd = charIDToTypeID( "Mrgd" );
    desc2.putBoolean( idMrgd,true );

executeAction( idsetd, desc2, DialogModes.NO );
};
