
import { useForm, usePage } from "@inertiajs/react";
import { router } from '@inertiajs/react'

export const Home = () => {
   

    const onLoad = (e) => {
      e.preventDefault()
        console.log(values);
        router.post('researchInicial', values)
    };
    return (

    <div>
      <h1>Redirecting...</h1>
      <p>You will be redirected shortly.</p>
    </div>
  );
};

export default Home;