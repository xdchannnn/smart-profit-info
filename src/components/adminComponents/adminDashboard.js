import Card from "./adminDashboard/Card";
import AdminHeader from "./adminHeader";

export default function AdminDashboard(props) {
    return(
        <div>
            <AdminHeader 
                title={"Панель приборов"}
                breadcrumbActive={"Панель приборов"}
            />
            <Cards />
        </div>
    )
}

function Cards(props) {
    return(
        <div className="d-flex flex-row flex-wrap">
            <Card 
                color="#F2CA6B"
                title="Всего участников:"
                data={2500}
                details={true}
            />
            <Card 
                color="#7289B3"
                title="Бесплатные участники:"
                data={300}
                details={true}
            />
            <Card 
                color="#5CD58E"
                title="Оплаченные участники:"
                data={2200}
                details={true}
            />

            <Card 
                color="#5CD5BF"
                title="Активные участнии:"
                data={2500}
                details={true}
            />
            <Card 
                color="#F2CA6B"
                title="Просроченные участники:"
                data={300}
                details={true}
            />
            <Card 
                color="#F2CA6B"
                title="Настройки лотереи:"
                data={100 + " BNB"}
                details={true}
            />
            
            <Card 
                color="#5CD5BF"
                title="Завершенные выплаты:"
                data={2500}
                details={true}
            />
            <Card 
                color="#F2CA6B"
                title="Завершенные депозиты:"
                data={300}
                details={true}
            />
            <Card 
                color="#56CDEF"
                title="Прибыль админа:"
                data={2600 + " BNB"}
                details={true}
            />

            <Card 
                color="#56CDEF"
                title='Статус "Start Profit"'
                data={1500}
                details={false}
            />
            <Card 
                color="#5CD58E"
                title='Статус "Fixed Profit"'
                data={500}
                details={false}
            />
            <Card 
                color="#F2CA6B"
                title='Статус "Maxi Profit"'
                data={500}
                details={false}
            />

            <Card 
                color="#E6A467"
                title='Участники "Maxi Bonus"'
                data={250}
                details={true}
            />
            <Card 
                color="#7289B3"
                title="Баннер"
                data={500}
                details={true}
            />
            <Card 
                color="#5CD5BF"
                title="Топ спонсоров"
                data={"TOP " + 100}
                details={true}
            />
        </div>
    )
}