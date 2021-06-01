import {ReactComponent as TDS} from '../IMG/001-3ds.svg'
import {ReactComponent as AI} from '../IMG/002-ai format.svg'
import {ReactComponent as APP} from '../IMG/003-app.svg'
import {ReactComponent as ASP} from '../IMG/004-asp.svg'
import {ReactComponent as BAT} from '../IMG/005-bat.svg'
import {ReactComponent as CPP} from '../IMG/006-c++.svg'
import {ReactComponent as CS} from '../IMG/007-c sharp.svg'
import {ReactComponent as CSS} from '../IMG/008-css.svg'
import {ReactComponent as CSV} from '../IMG/009-csv.svg'
import {ReactComponent as DAT} from '../IMG/010-dat format.svg'
import {ReactComponent as DLL} from '../IMG/011-dll.svg'
import {ReactComponent as DOC} from '../IMG/012-doc.svg'
import {ReactComponent as DOCX} from '../IMG/013-docx.svg'
import {ReactComponent as DWG} from '../IMG/014-dwg.svg'
import {ReactComponent as EML} from '../IMG/015-eml.svg'
import {ReactComponent as EPS} from '../IMG/016-eps.svg'
import {ReactComponent as EXE} from '../IMG/017-exe.svg'
import {ReactComponent as FLV} from '../IMG/018-flv.svg'
import {ReactComponent as GIF} from '../IMG/019-gif.svg'
import {ReactComponent as HTML} from '../IMG/020-html.svg'
import {ReactComponent as ICS} from '../IMG/021-ics format.svg'
import {ReactComponent as ISO} from '../IMG/022-iso.svg'
import {ReactComponent as JAR} from '../IMG/023-jar.svg'
import {ReactComponent as JPEG} from '../IMG/024-jpeg.svg'
import {ReactComponent as JPG} from '../IMG/025-jpg.svg'
import {ReactComponent as JS} from '../IMG/026-js format.svg'
import {ReactComponent as LOG} from '../IMG/027-log format.svg'
import {ReactComponent as MDB} from '../IMG/028-mdb.svg'
import {ReactComponent as MOV} from '../IMG/029-mov.svg'
import {ReactComponent as MP3} from '../IMG/030-mp3.svg'
import {ReactComponent as MP4} from '../IMG/031-mp4.svg'
import {ReactComponent as PDF} from '../IMG/032-pdf.svg'
import {ReactComponent as OBJ} from '../IMG/033-obj.svg'
import {ReactComponent as OTF} from '../IMG/034-otf.svg'
import {ReactComponent as PHP} from '../IMG/035-php.svg'
import {ReactComponent as PNG} from '../IMG/036-png.svg'
import {ReactComponent as PPT} from '../IMG/037-ppt.svg'
import {ReactComponent as PSD} from '../IMG/038-psd.svg'
import {ReactComponent as PUB} from '../IMG/039-pub.svg'
import {ReactComponent as RAR} from '../IMG/040-rar.svg'
import {ReactComponent as SQL} from '../IMG/041-sql.svg'
import {ReactComponent as SRT} from '../IMG/042-srt.svg'
import {ReactComponent as SVG} from '../IMG/043-svg.svg'
import {ReactComponent as TTF} from '../IMG/044-ttf.svg'
import {ReactComponent as TXT} from '../IMG/045-txt.svg'
import {ReactComponent as WAV} from '../IMG/046-wav format.svg'
import {ReactComponent as XLS} from '../IMG/047-xls.svg'
import {ReactComponent as XLSX} from '../IMG/048-xlsx.svg'
import {ReactComponent as XML} from '../IMG/049-xml.svg'
import {ReactComponent as ZIP} from '../IMG/050-zip.svg'


import useStyles from '../pages/MainPage/MainTheme'


export default function Extension({file}){
    const classes = useStyles();
    switch(file){
        case 'tds':
        case 'TDS':
            return <TDS className ={classes.svgIcon}/>
        case 'ai':
        case 'AI':
            return <AI className ={classes.svgIcon}/>
        case 'app':
        case 'APP':
            return <APP className ={classes.svgIcon}/>
        case 'asp':
        case 'ASP':
            return <ASP className ={classes.svgIcon}/>
        case 'bat':
        case 'BAT':
            return <BAT className ={classes.svgIcon}/>
        case 'cpp':
        case 'CPP':
            return <CPP className ={classes.svgIcon}/>
        case 'cs':
        case 'CS':
            return <CS className ={classes.svgIcon}/>
        case 'css':
        case 'CSS':
            return <CSS className ={classes.svgIcon}/>
        case 'csv':
        case 'CSV':
            return <CSV className ={classes.svgIcon}/>
        case 'dat':
        case 'DAT':
            return <DAT className ={classes.svgIcon}/>
        case 'dll':
        case 'DLL':
            return <DLL className ={classes.svgIcon}/>
        case 'doc':
        case 'DOC':
            return <DOC className ={classes.svgIcon}/>
        case 'docx':
        case 'DOCX':
            return <DOCX className ={classes.svgIcon}/>
        case 'dwg':
        case 'DWG':
            return <DWG className ={classes.svgIcon}/>
        case 'eml':
        case 'EML':
            return <EML className ={classes.svgIcon}/>
        case 'eps':
        case 'EPS':
            return <EPS className ={classes.svgIcon}/>
        case 'exe':
        case 'EXE':
            return <EXE className ={classes.svgIcon}/>
        case 'flv':
        case 'FLV':
            return <FLV className ={classes.svgIcon}/>
        case 'gif':
        case 'GIF':
            return <GIF className ={classes.svgIcon}/>
        case 'html':
        case 'HTML':
            return <HTML className ={classes.svgIcon}/>
        case 'ics':
        case 'ICS':
            return <ICS className ={classes.svgIcon}/>
        case 'iso':
        case 'ISO':
            return <ISO className ={classes.svgIcon}/>
        case 'jar':
        case 'JAR':
            return <JAR className ={classes.svgIcon}/>
        case 'jpeg':
        case 'JPEG':
            return <JPEG className ={classes.svgIcon}/>
        case 'jpg':
        case 'JPG':
            return <JPG className ={classes.svgIcon}/>
        case 'js':
        case 'JS':
            return <JS className ={classes.svgIcon}/>
        case 'log':
        case 'LOG':
            return <LOG className ={classes.svgIcon}/>
        case 'mdb':
        case 'MDB':
            return <MDB className ={classes.svgIcon}/>
        case 'mov':
        case 'MOV':
            return <MOV className ={classes.svgIcon}/>
        case 'mp3':
        case 'MP3':
            return <MP3 className ={classes.svgIcon}/>
        case 'mp4':
        case 'MP4':
            return <MP4 className ={classes.svgIcon}/>
        case 'obj':
        case 'OBJ':
            return <OBJ className ={classes.svgIcon}/>
        case 'otf':
        case 'OTF':
            return <OTF className ={classes.svgIcon}/>
        case 'php':
        case 'PHP':
            return <PHP className ={classes.svgIcon}/>
        case 'png':
        case 'PNG':
            return <PNG className ={classes.svgIcon}/>
        case 'ppt':
        case 'PPT':
            return <PPT className ={classes.svgIcon}/>
        case 'psd':
        case 'PSD':
            return <PSD className ={classes.svgIcon}/>
        case 'pub':
        case 'PUB':
            return <PUB className ={classes.svgIcon}/>
        case 'sql':
        case 'SQL':
            return <SQL className ={classes.svgIcon}/>
        case 'srt':
        case 'SRT':
            return <SRT className ={classes.svgIcon}/>
        case 'svg':
        case 'SVG':
            return <SVG className ={classes.svgIcon}/>
        case 'ttf':
        case 'TTF':
            return <TTF className ={classes.svgIcon}/>
        case 'txt':
        case 'TXT':
            return <TXT className ={classes.svgIcon}/>
        case 'wav':
        case 'WAV':
            return <WAV className ={classes.svgIcon}/>
        case 'xls':
        case 'XLS':
            return <XLS className ={classes.svgIcon}/>
        case 'xlsx':
        case 'XLSX':
            return <XLSX className ={classes.svgIcon}/>
        case 'xml':
        case 'XML':
            return <XML className ={classes.svgIcon}/>
        case 'rar':
        case 'RAR':
            return <RAR  className ={classes.svgIcon}/>
        case 'zip':
        case 'ZIP':
            return <ZIP className ={classes.svgIcon}/>
        case 'pdf':
        case 'PDF':
            return <PDF className ={classes.svgIcon}/>
        default:
            return null   

    }
}