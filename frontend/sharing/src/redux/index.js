import { combineReducers, createStore, applyMiddleware } from 'redux'
import UploadReducer from './Uploader/reducer'
import {UploadControlReducer, UploadFilesReducer} from './UploaderControl/reducer'
import SendingReducer from './Sending/reducer'
import {ExtraOptionsReducer, ToReducer, FromReducer, MessageReducer, IsValidReducer} from './ExtraOptions/reducer'
import DownloadFilesReducer from './Download/reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    UploadReducer,
    UploadControlReducer,
    ExtraOptionsReducer,
    ToReducer,
    FromReducer,
    MessageReducer,
    IsValidReducer,
    UploadFilesReducer,
    SendingReducer,
    DownloadFilesReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;