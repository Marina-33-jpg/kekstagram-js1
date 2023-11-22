import {renderPictures} from '/js/picture.js';
import { getData, sendData } from '/js/api.js';
import { showAlert } from '/js/util.js';
import { setOnFormSubmit, hideModal } from '/js/form.js';
import { showSuccessMessage, showErrorMessage } from '/js/message.js';

const onSendDataSuccess = () => {
  hideModal();
  showSuccessMessage();
};

const onSendDataError = () => {
  showErrorMessage();
};

setOnFormSubmit(async (data) => {
  await sendData(onSendDataSuccess, onSendDataError, data);
});

getData(renderPictures, showAlert);

