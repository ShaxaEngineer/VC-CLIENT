import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const successMasseg = (text: string) => {
  const toast = withReactContent(Swal).mixin({
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 3000,
    showCloseButton: true,
    customClass: {
      popup: `!text-white !bg-gradient-to-r !from-lime-400 !to-lime-500 !tw-close-button !p-1`,
    },
  });
  toast.fire({
    title: text ?? 'success',
  });
};

export const errorMasseg = (text: string) => {
  const toast = withReactContent(Swal).mixin({
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 3000,
    showCloseButton: true,
    timerProgressBar: true,
    customClass: {
      popup: `!text-white !bg-gradient-to-r !from-rose-400 !to-red-500 !tw-close-button !p-1`,
    },
  });
  toast.fire({
    title: text ?? 'error',
  });
};

export const infoMasseg = (text: string) => {
  const toast = withReactContent(Swal).mixin({
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 3000,
    showCloseButton: true,
    customClass: {
      popup: `!text-white !bg-gradient-to-r !from-amber-200 !to-yellow-500 !tw-close-button !p-1`,
    },
  });
  toast.fire({
    title: text ?? 'warning',
  });
};
