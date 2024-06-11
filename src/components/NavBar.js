import * as React from "react"
import NavBarItem from "./NavBarItem"

const NavBar = ({setPageState}) => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    const [darkMode, setDarkMode] =React.useState('light');
    
    const handleMobileMenu = () => {
        if (toggleMenu === false) {
            setToggleMenu(true);
            document.body.style.overflowY = 'hidden';
        } else {
            setToggleMenu(false);
            document.body.style.overflowY = 'auto';
        }
    }

    const handleDarkModeToggle = () => {
        if (darkMode === 'light') {
            setDarkMode('dark');
            document.body.classList.add("dark");
        } else {
            setDarkMode('light');
            document.body.classList.remove("dark");
        }
    }

    return (
        <>
        <header className="container mx-auto my-auto flex justify-end py-4xl relative z-[35] md:static ">
            <nav >
                <ul className=" hidden md:flex items-center list-none p-0 gap-4xl ">
                    <li><button
                    aria-label="Return to home"
                    className="absolute top-base left-4xl h-4xl w-4xl text-cyan-400 fill-[#070a13] dark:fill-slate-100 py-xl"
                    onClick={() => setPageState('Home')}
                    ><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 563 563" >
                        <g stroke-width="1.5" stroke="currentColor">
                            <path transform="scale(0.550628 0.550628)" d="M494.924 26.2846C505.29 25.349 516.05 25.9213 526.46 26.1775C544.321 26.6171 561.763 28.538 579.437 31.0586C634.007 38.8411 686.731 55.7552 735.5 81.4889C804.701 118.004 864.217 171.01 908.144 235.751C922.289 256.598 935.029 278.613 945.25 301.657C950.707 313.961 956.893 326.624 960.752 339.54L966.026 355.25L971.642 373.461L982.655 421.95C986.451 442.795 988.022 463.816 989.719 484.9C991.205 503.35 990.458 522.563 989.176 541C982.059 643.3 941.751 740.217 874.903 817.965C804.058 900.361 703.384 957.503 596.5 976.994C583.562 979.353 570.365 981.2 557.25 982.232L528.772 983.956C486.862 985.257 444.229 981.67 403.33 972.314C322.717 953.874 246.65 913.216 186.143 856.878C112.528 788.336 60.9783 697.985 41.6193 599.109C36.2763 571.82 33.5717 543.918 32.617 516.141C28.2737 389.773 79.3475 265.956 165.157 174.173C176.089 162.479 188.078 151.612 200.216 141.185C281.884 71.0304 387.299 29.8289 494.924 26.2846ZM775.739 211.099L779.966 211.137L864.334 210.953C807.628 141.116 727.931 88.7097 641.452 63.8633C617.347 56.9377 592.374 51.2494 567.398 48.7577L533.25 47.0344C521.307 46.4578 508.924 45.2931 497 45.5143C481.288 45.8057 465.137 47.692 449.582 49.8438C406.532 55.799 364.427 67.2358 324.73 85.068C311.384 91.063 298.426 98.1057 285.632 105.199C197.351 154.147 125.933 235.551 87.0709 328.5C79.3468 346.974 73.6743 365.851 68.0101 385C64.5521 396.69 62.426 408.827 59.9868 420.75C54.323 448.434 52.4752 477.143 52.4798 505.357C52.4838 530.462 53.9142 555.947 58.0035 580.75C60.7025 597.12 64.9295 612.822 68.6525 628.946L74.2318 647.984C75.9098 654.21 78.4772 660.329 80.6663 666.397C96.4621 710.186 119.92 750.043 147.995 787.033C156.537 798.288 165.985 808.93 175.626 819.25C186.157 830.522 197.056 841.563 208.698 851.704L232.968 870.909C280.163 906.559 332.206 932.413 389.176 948.366C407.25 953.427 425.917 957.871 444.531 960.365C480.538 965.19 517.993 966.732 554.223 963.44C642.613 955.407 724.965 920.992 795.25 867.339C889.812 795.155 952.983 682.603 968.501 565C973.275 528.823 972.43 492.94 968.536 456.75C963.325 408.314 950.724 359.451 930.797 314.949C916.823 283.742 899.035 254.187 878.29 227.032L857.638 322.221C857.145 324.037 860.881 328.88 861.957 330.663C871.508 346.494 879.394 364.492 886.017 381.75C887.814 386.431 889.975 391.546 891.178 396.391L892.017 399.25L895.016 409.25C904.731 440.474 909.422 474.591 909.93 507.274L908.975 541.606C908.376 555.292 905.913 569.273 903.557 582.75C889.802 661.429 848.682 735.551 790.136 789.773C773.585 805.102 755.24 819.697 736.207 831.81C726.005 838.303 715.149 844.126 704.43 849.702C701.573 851.187 694.496 855.865 691.413 855.75L719.565 838.272C778.945 797.231 828.122 742.831 860.415 678.1C870.393 658.098 879.02 637.052 885.033 615.497C891.567 592.075 896.246 568.419 898.353 544.164C903.372 486.378 894.261 426.91 872.356 373.241C867.243 360.712 861.649 348.235 854.991 336.441L759.455 796.042L692.046 796.065L674.592 796.076C671.439 796.078 667.877 796.42 664.772 795.887L615.901 619.141L601.865 668.454L577.854 754.45L566.46 796.015L455.918 796.045L455.743 711.732L455.773 711.249L349.534 795.936C343.259 796.979 336.194 796.402 329.817 796.402L287.132 796.091L271.17 796.191C270.104 796.203 267.527 796.566 266.592 796.244C266.112 796.078 265.028 794.929 264.611 794.578L259.145 790.001L221.338 758.315C216.683 754.459 211.818 749.45 206.623 746.407C217.319 760.08 228.986 772.113 241.348 784.263C269.072 811.512 299.376 836.142 333.399 855.134L333 855.475C318.787 849.088 304.262 841.642 291.121 833.273C271.138 820.545 252.472 805.379 234.974 789.452C223.1 778.646 211.607 767.597 201.121 755.416L181.678 730.725C178.32 726.217 175.135 721.101 171.25 717.051C162.873 708.317 153.058 701.057 144.294 692.705C142.813 685.15 145.351 676.449 143.685 668.901C142.678 664.342 140.412 659.791 138.768 655.409L129.627 629.232C116.856 588.183 109.772 546.59 109.931 503.529C110.202 430.371 131.194 356.973 171.342 295.661C186.561 272.418 204.719 251.153 224.418 231.614C222.041 228.929 217.739 226.703 214.713 224.661L194.632 211.092L225.288 211.208L234.646 211.423C235.551 211.434 237.554 211.718 238.372 211.46C238.912 211.29 239.809 210.667 240.25 210.305C246.547 205.134 252.918 196.98 260.661 194.016L243.05 210.854C246.289 211.419 250.013 211.26 253.308 211.313L272.39 211.419L337.033 211.507L572.457 211.496L572.626 352.777L615.711 204.586L619.541 217L620.624 220.5L622.241 225.938L631.632 256.934L633.236 262.172L635.263 268.953L655.551 336L661.014 354.25L661.578 356L668.539 379L674.253 397.922L690.025 450.25L693.619 461.963L695.214 467.172L696.639 471.916L698.246 477.141L703.184 491.535L755.265 253.174C740.322 242.878 725.036 232.518 709.246 223.56C697.225 216.74 684.63 210.604 672.072 204.863L672.5 204.452C702.296 215.538 730.178 228.842 756.307 247.13L764.318 210.898L775.739 211.099ZM774.507 223.443C771.399 234.495 769.289 246 766.992 257.25L753.927 317.5L737.961 391.5L709.886 522.144L695.468 591.718L692.448 606.75C691.83 610.178 691.411 614.38 690.25 617.624C688.262 614.627 687.442 608.867 686.439 605.305L678.007 575.522L642.972 454.327L625.993 395.5C623.084 385.809 620.537 375.841 617.081 366.334L561.46 573.87L559.992 224.47L467.524 224.082L467.498 493.25L467.96 784.35L557.298 783.933L616.116 569.841L625.797 606.578L628.785 617.578L631.808 628.578L634.01 636.5L634.817 639.578L636.997 647.5L644.802 676.578L646.35 682.25L649.78 694.797L652.766 705.797L655.766 716.797L662.017 739.5L674.284 784.145L749.713 784.4L749.804 783.59C750.504 777.839 752.172 771.939 753.365 766.25L760.686 731.555L782.158 628.409L848.306 310.899L862.187 243.992L865.207 229.636C865.57 227.888 866.475 225.196 866.207 223.481L774.507 223.443ZM402.156 223.752L238.238 223.999L368.367 308.92L368.008 402.088L368.015 572.051L368.087 628.785L368.415 646.759C368.463 650.327 368.733 654.011 368.141 657.542L305.747 706.205C292.802 696.952 281.108 686.143 268.746 676.169L254.25 664.713C250.705 662.013 246.184 659.092 243.405 655.618L243.506 580.465L173.993 580.139L160.353 580.123C159.487 580.134 157.405 579.925 156.653 580.19C156.427 580.269 156.294 580.506 156.115 580.664L156.117 653.599L156.117 675.485C156.111 679.336 155.789 683.507 156.299 687.309L181.457 708.931L240.133 758.077L264.468 779.003C266.009 780.282 269.035 783.422 270.897 783.975C272.503 784.452 274.927 784.234 276.624 784.277L291.054 784.369L343.623 784.467L455.504 696.004L455.363 223.671L402.156 223.752ZM233.168 236.105C177.867 289.846 138.671 361.298 125.676 437.554C122.836 454.218 120.242 471.272 119.997 488.206C119.746 505.484 119.8 522.731 121.215 539.964C123.583 568.806 129.398 597.89 138.018 625.5L142.296 638.389C142.762 639.657 143.168 641.462 144.017 642.501L144.036 567.882L255.41 567.998L255.253 577.508L255.456 649.864L271.6 662.885L355.296 596.169L355.36 315.375L275.844 263.657L247.89 245.63C243.078 242.539 237.561 239.73 233.168 236.105Z"/>
                            <path transform="scale(0.550628 0.550628)" d="M775.739 211.099L759.503 195.713C766.7 200.156 773.99 205.126 779.966 211.137L775.739 211.099Z"/>
                        </g>
                        </svg></button></li>
                    <NavBarItem setPageState={setPageState}>About</NavBarItem>
                    <NavBarItem setPageState={setPageState}>Projects</NavBarItem>
                    <NavBarItem setPageState={setPageState}>Contact</NavBarItem>
                    <li className=" border border-slate-600 border-solid py-xl"></li>
                    <li>
                    <button aria-label="Dark Mode Toggle" className="block text-slate-600 h-base w-base " onClick={()=> handleDarkModeToggle()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                    </button></li>
                   
                </ul>
                <button aria-label="Mobile Menu" className="text-slate-600 w-2xl h-2xl block md:hidden" onClick={() => handleMobileMenu()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    </button>
            </nav>
        </header>
        {toggleMenu === true
        ? <div className="absolute top-[0] left-[0] z-[30] w-full h-full flex justify-center items-center text-center md:hidden bg-slate-100 dark:bg-[#070a13]">
        <nav>
        <ul className=" list-none p-[0] flex flex-col gap-base">
                    <li><button
                    aria-label="Return to home"
                    className="h-4xl w-4xl bg-slate-100 dark:bg-[#070a13] text-cyan-400 dark:fill-slate-100"
                    onClick={() => setPageState('Home')}
                    ><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 563 563" >
                        <g stroke-width="1.5" stroke="currentColor">
                            <path transform="scale(0.550628 0.550628)" d="M494.924 26.2846C505.29 25.349 516.05 25.9213 526.46 26.1775C544.321 26.6171 561.763 28.538 579.437 31.0586C634.007 38.8411 686.731 55.7552 735.5 81.4889C804.701 118.004 864.217 171.01 908.144 235.751C922.289 256.598 935.029 278.613 945.25 301.657C950.707 313.961 956.893 326.624 960.752 339.54L966.026 355.25L971.642 373.461L982.655 421.95C986.451 442.795 988.022 463.816 989.719 484.9C991.205 503.35 990.458 522.563 989.176 541C982.059 643.3 941.751 740.217 874.903 817.965C804.058 900.361 703.384 957.503 596.5 976.994C583.562 979.353 570.365 981.2 557.25 982.232L528.772 983.956C486.862 985.257 444.229 981.67 403.33 972.314C322.717 953.874 246.65 913.216 186.143 856.878C112.528 788.336 60.9783 697.985 41.6193 599.109C36.2763 571.82 33.5717 543.918 32.617 516.141C28.2737 389.773 79.3475 265.956 165.157 174.173C176.089 162.479 188.078 151.612 200.216 141.185C281.884 71.0304 387.299 29.8289 494.924 26.2846ZM775.739 211.099L779.966 211.137L864.334 210.953C807.628 141.116 727.931 88.7097 641.452 63.8633C617.347 56.9377 592.374 51.2494 567.398 48.7577L533.25 47.0344C521.307 46.4578 508.924 45.2931 497 45.5143C481.288 45.8057 465.137 47.692 449.582 49.8438C406.532 55.799 364.427 67.2358 324.73 85.068C311.384 91.063 298.426 98.1057 285.632 105.199C197.351 154.147 125.933 235.551 87.0709 328.5C79.3468 346.974 73.6743 365.851 68.0101 385C64.5521 396.69 62.426 408.827 59.9868 420.75C54.323 448.434 52.4752 477.143 52.4798 505.357C52.4838 530.462 53.9142 555.947 58.0035 580.75C60.7025 597.12 64.9295 612.822 68.6525 628.946L74.2318 647.984C75.9098 654.21 78.4772 660.329 80.6663 666.397C96.4621 710.186 119.92 750.043 147.995 787.033C156.537 798.288 165.985 808.93 175.626 819.25C186.157 830.522 197.056 841.563 208.698 851.704L232.968 870.909C280.163 906.559 332.206 932.413 389.176 948.366C407.25 953.427 425.917 957.871 444.531 960.365C480.538 965.19 517.993 966.732 554.223 963.44C642.613 955.407 724.965 920.992 795.25 867.339C889.812 795.155 952.983 682.603 968.501 565C973.275 528.823 972.43 492.94 968.536 456.75C963.325 408.314 950.724 359.451 930.797 314.949C916.823 283.742 899.035 254.187 878.29 227.032L857.638 322.221C857.145 324.037 860.881 328.88 861.957 330.663C871.508 346.494 879.394 364.492 886.017 381.75C887.814 386.431 889.975 391.546 891.178 396.391L892.017 399.25L895.016 409.25C904.731 440.474 909.422 474.591 909.93 507.274L908.975 541.606C908.376 555.292 905.913 569.273 903.557 582.75C889.802 661.429 848.682 735.551 790.136 789.773C773.585 805.102 755.24 819.697 736.207 831.81C726.005 838.303 715.149 844.126 704.43 849.702C701.573 851.187 694.496 855.865 691.413 855.75L719.565 838.272C778.945 797.231 828.122 742.831 860.415 678.1C870.393 658.098 879.02 637.052 885.033 615.497C891.567 592.075 896.246 568.419 898.353 544.164C903.372 486.378 894.261 426.91 872.356 373.241C867.243 360.712 861.649 348.235 854.991 336.441L759.455 796.042L692.046 796.065L674.592 796.076C671.439 796.078 667.877 796.42 664.772 795.887L615.901 619.141L601.865 668.454L577.854 754.45L566.46 796.015L455.918 796.045L455.743 711.732L455.773 711.249L349.534 795.936C343.259 796.979 336.194 796.402 329.817 796.402L287.132 796.091L271.17 796.191C270.104 796.203 267.527 796.566 266.592 796.244C266.112 796.078 265.028 794.929 264.611 794.578L259.145 790.001L221.338 758.315C216.683 754.459 211.818 749.45 206.623 746.407C217.319 760.08 228.986 772.113 241.348 784.263C269.072 811.512 299.376 836.142 333.399 855.134L333 855.475C318.787 849.088 304.262 841.642 291.121 833.273C271.138 820.545 252.472 805.379 234.974 789.452C223.1 778.646 211.607 767.597 201.121 755.416L181.678 730.725C178.32 726.217 175.135 721.101 171.25 717.051C162.873 708.317 153.058 701.057 144.294 692.705C142.813 685.15 145.351 676.449 143.685 668.901C142.678 664.342 140.412 659.791 138.768 655.409L129.627 629.232C116.856 588.183 109.772 546.59 109.931 503.529C110.202 430.371 131.194 356.973 171.342 295.661C186.561 272.418 204.719 251.153 224.418 231.614C222.041 228.929 217.739 226.703 214.713 224.661L194.632 211.092L225.288 211.208L234.646 211.423C235.551 211.434 237.554 211.718 238.372 211.46C238.912 211.29 239.809 210.667 240.25 210.305C246.547 205.134 252.918 196.98 260.661 194.016L243.05 210.854C246.289 211.419 250.013 211.26 253.308 211.313L272.39 211.419L337.033 211.507L572.457 211.496L572.626 352.777L615.711 204.586L619.541 217L620.624 220.5L622.241 225.938L631.632 256.934L633.236 262.172L635.263 268.953L655.551 336L661.014 354.25L661.578 356L668.539 379L674.253 397.922L690.025 450.25L693.619 461.963L695.214 467.172L696.639 471.916L698.246 477.141L703.184 491.535L755.265 253.174C740.322 242.878 725.036 232.518 709.246 223.56C697.225 216.74 684.63 210.604 672.072 204.863L672.5 204.452C702.296 215.538 730.178 228.842 756.307 247.13L764.318 210.898L775.739 211.099ZM774.507 223.443C771.399 234.495 769.289 246 766.992 257.25L753.927 317.5L737.961 391.5L709.886 522.144L695.468 591.718L692.448 606.75C691.83 610.178 691.411 614.38 690.25 617.624C688.262 614.627 687.442 608.867 686.439 605.305L678.007 575.522L642.972 454.327L625.993 395.5C623.084 385.809 620.537 375.841 617.081 366.334L561.46 573.87L559.992 224.47L467.524 224.082L467.498 493.25L467.96 784.35L557.298 783.933L616.116 569.841L625.797 606.578L628.785 617.578L631.808 628.578L634.01 636.5L634.817 639.578L636.997 647.5L644.802 676.578L646.35 682.25L649.78 694.797L652.766 705.797L655.766 716.797L662.017 739.5L674.284 784.145L749.713 784.4L749.804 783.59C750.504 777.839 752.172 771.939 753.365 766.25L760.686 731.555L782.158 628.409L848.306 310.899L862.187 243.992L865.207 229.636C865.57 227.888 866.475 225.196 866.207 223.481L774.507 223.443ZM402.156 223.752L238.238 223.999L368.367 308.92L368.008 402.088L368.015 572.051L368.087 628.785L368.415 646.759C368.463 650.327 368.733 654.011 368.141 657.542L305.747 706.205C292.802 696.952 281.108 686.143 268.746 676.169L254.25 664.713C250.705 662.013 246.184 659.092 243.405 655.618L243.506 580.465L173.993 580.139L160.353 580.123C159.487 580.134 157.405 579.925 156.653 580.19C156.427 580.269 156.294 580.506 156.115 580.664L156.117 653.599L156.117 675.485C156.111 679.336 155.789 683.507 156.299 687.309L181.457 708.931L240.133 758.077L264.468 779.003C266.009 780.282 269.035 783.422 270.897 783.975C272.503 784.452 274.927 784.234 276.624 784.277L291.054 784.369L343.623 784.467L455.504 696.004L455.363 223.671L402.156 223.752ZM233.168 236.105C177.867 289.846 138.671 361.298 125.676 437.554C122.836 454.218 120.242 471.272 119.997 488.206C119.746 505.484 119.8 522.731 121.215 539.964C123.583 568.806 129.398 597.89 138.018 625.5L142.296 638.389C142.762 639.657 143.168 641.462 144.017 642.501L144.036 567.882L255.41 567.998L255.253 577.508L255.456 649.864L271.6 662.885L355.296 596.169L355.36 315.375L275.844 263.657L247.89 245.63C243.078 242.539 237.561 239.73 233.168 236.105Z"/>
                            <path transform="scale(0.550628 0.550628)" d="M775.739 211.099L759.503 195.713C766.7 200.156 773.99 205.126 779.966 211.137L775.739 211.099Z"/>
                        </g>
                        </svg></button></li>
                    <NavBarItem setPageState={setPageState}>About</NavBarItem>
                    <NavBarItem setPageState={setPageState}>Projects</NavBarItem>
                    <NavBarItem setPageState={setPageState}>Contact</NavBarItem>
                    <li className=" border border-slate-600 border-solid pr-xl"></li>
                    <li>
                    <button aria-label="Dark Mode Toggle" className=" text-slate-600 h-base w-base" onClick={()=> handleDarkModeToggle()} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                    </button></li>
                   
                </ul>
        </nav>
    </div>
        :<></>}
       
        </>
        
    )
}

export default NavBar
