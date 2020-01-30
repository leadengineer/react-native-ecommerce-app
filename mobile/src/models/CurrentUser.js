//leadsoftengineer SERHII SMOLKO 30.01.2020
import { types, flow } from 'mobx-state-tree';
import { customerApi } from '../api/Api';

const UserInfo = types.model('UserInfo', {
    _id: types.identifier,
    firstName: types.string,
    lastName: types.string,
    avatarUrl: types.maybe(types.string)
})

export const CurrentUser = types.model('CurrentUser', {
    authToken: types.maybe(types.string),
    info: types.maybe(UserInfo),
}).actions(self => ({
    login: flow(function* (providerToken, provider) {
        try {
            const res = yield customerApi.post({
                token: providerToken,
                provider
            }).json()

            console.log('result', res);
        } catch (error) {
            console.log('error', error)
        }
    })
}))

