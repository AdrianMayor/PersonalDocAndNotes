import './index.scss';
import { useEffect, useState } from "react"

const Clock = () => {
    const [time, setTime] = useState(new Date())
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000)
        return () => clearInterval(timer)
    })
    return <div className='clock'>
        <span className='weekDay'>{daysOfWeek[time.getDay()]}</span>
        <span className="day">{time.getDate()}</span>
        <span className="month">{months[time.getMonth()]}</span>
        <span className="year">{time.getFullYear()}</span>
        <span className="time">{time.toLocaleTimeString()}</span>
    </div>
}

export default Clock