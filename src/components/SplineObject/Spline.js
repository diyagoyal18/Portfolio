import Spline from '@splinetool/react-spline';

export default function Object() {
  return (
    <div className='spline-container'>

      <Spline className='spline'
        scene="https://prod.spline.design/5k6MSUEt5eF9rvxx/scene.splinecode" 
        frameBorder='0'
        width='100%'
        height='100%'
        allow='fullscreen'
      />
      
    </div>
    
  );
}
