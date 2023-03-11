import {followUser} from '../usersAction';
import {usersAPI} from '../../../api';
import {FollowResponseType, ResultCodeEnum} from '../../../api/apiTypes';

jest.mock('../../../api');

const usersAPIMock = usersAPI;
const result: FollowResponseType = {
    resultCode: ResultCodeEnum.Success,
    messages: [],
    data: {},
}
//@ts-ignore
usersAPIMock.follow.mockReturnValue(Promise.resolve(result));

// describe('thunk test', () => {
//     it('', async () => {
//         const thunk = followUser(1);
//         const dispatchMock = jest.fn();
//
//         await thunk(dispatchMock);
//
//         expect(dispatchMock).toBeCalledTimes(1);
//     })
// })
