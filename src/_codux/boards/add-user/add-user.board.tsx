import { createBoard } from '@wixc3/react-board';
import { AddUser } from '../../../components/add-user/add-user';

export default createBoard({
    name: 'AddUser',
    Board: () => <AddUser />
});
