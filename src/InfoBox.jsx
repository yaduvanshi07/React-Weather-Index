import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import LightModeIcon from '@mui/icons-material/LightMode';

import Typography from '@mui/material/Typography';
import "./InfoBox.css";


export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
   
    const HOT_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1727509624619-4049ea319d83?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(<div className="InfoBox">
        <div className="container">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >80 ? RAIN_URL :info.temp >15 ? HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity >80 ? <ThunderstormIcon/> :info.temp >15 ? <LightModeIcon/>:<AcUnitIcon/>
            
          }
        </Typography>
        <Typography variant="body2"  color= "text.secondary" component={"span"}>
         <p>Temperature= {info.temp}&deg;C</p>
         <p>Humidity= {info.humidity}</p>
         <p>Min Temp= {info.tempMin}&deg;C</p>
         <p>Max Temp= {info.tempMax}&deg;C</p>
        <p>
            The weather can be described as&nbsp;<i>{info.weather}</i>  and feels like {info.feelslike}&deg;C
        </p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
    </div>);
}