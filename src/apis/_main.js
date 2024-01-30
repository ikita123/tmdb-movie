// ** Axios
import axios from "axios";
import { toast } from 'react-toastify';
import SweetAlertReactContent from 'sweetalert2-react-content';
import SweetAlertRoot from 'sweetalert2';
import endPointConfig from "./_endPoint";

const sweetAlert = SweetAlertReactContent(SweetAlertRoot);

const {
  methodType,
  backendEndpoint,
  contentTypeEnum,
  defaultListingParameter
} = endPointConfig;

export const axiosCallAdvanced = async ({
  path,
  baseURL,
  method = methodType.get,
  body = {},
  page = defaultListingParameter.page,
  language = defaultListingParameter.language,
  contentType = contentTypeEnum.applicationJSON,
  parameter = {},

}) => {
  try {
    const params = structuredClone(parameter)
    if (
      method &&
      method === methodType.get &&
      path.split("list").length > 1
    ) {

      params.page = page
      params.language = language
    }
    const url = backendEndpoint + baseURL + path;
    const token = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWFjNWY5NTQ5MjgzNjlmMDFhYWE5YTUzZDhmODM3NSIsInN1YiI6IjY1YjYwNjhiYjExMzFmMDE4ZDJhMmZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6UfM1gvG69uyX9cBRc2FxQwJHJKkyGLoGfGWV33q-Go`
    const response = await axios({
      url,
      params,
      method,
      data: body,
      headers: {
        'Content-Type': contentType,
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.data && response.data.message
      && response.data.message.length > 0) {
      toast.success(response.data.message)
    }
    return response
  } catch (error) {
    console.error("Error in axiosCallAdvanced:", error);

    sweetAlert.fire({
      icon: 'error',
      title: error.response?.data.message || error.message,
      customClass: {
        confirmButton: 'btn btn-primary',
      },
      showClass: {
        popup: 'animate__animated animate__bounceIn',
      },
      buttonsStyling: false,
    });

    if (error.response && error.response.status === 401) {
      // Handle unauthorized access
      // sessionStorage.clear();
      // window.location.href = '/login';
    }

    throw error; // Rethrow the error for further handling
  }
};

export default {
  axiosCallAdvanced,
};
