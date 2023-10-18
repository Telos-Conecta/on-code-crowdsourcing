'use client'
import handsImage from '@/assets/Rectangle 5.jpg'

export default function LoginSidebarImage() {
    return (
        <div className='hidden lg:block lg:w-[480px] bg-black'>
            <img src={handsImage.src} alt="Maos unidas"
                className='object-cover h-full w-full' />
        </div>
    )
}
