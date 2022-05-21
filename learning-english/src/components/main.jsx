import './assets/style/scss/main.scss';
import Table from './table';
import Row from './row';
import Card from './card'

function Main() {
    return (
        <div>
            <Table />
            <Card isPlay={true} />

        </div>

    )
}
export default Main;