import * as React from 'react';
import Image from 'next/image';

export function Header() {
    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-[#e67e16]">
                <div className="px-2 py-2">
                    <div className="flex items-center justify-between">
                        <div className="hidden md:flex rounded-full ml-2 mr-2">
                            <Image
                                src="./static/images/ariel.png"
                                alt="Ariel Space Mission"
                                width={56}
                                height={56}
                            />
                        </div>

                        <div className="text-lg font-semibold tracking-wide text-white md:text-xl">
              Exoplanet Database Demo
            </div>
                    </div>
                </div>
            </nav>
        </>
    );
};
