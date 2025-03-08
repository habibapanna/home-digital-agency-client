import React from 'react';

const Customers = () => {
    return (
        <div className="bg-white pt-5">
            <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#242a56]">Our Customers</h1>
        <p className="text-gray-700 mt-3 px-4 md:text-lg">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.​​
        </p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-center justify-center'>
        <div className='border border-gray-100 p-5 md:p-10'>
            <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" width="144" height="80" viewBox="0 0 144 80" fill="none"><path d="M26.4472 50.26H46.9672V29.74H26.4472V50.26ZM43.0176 38.0256H38.6816V33.6896H43.0176V38.0256ZM30.396 33.6896H34.7344V41.9744H43.0176V46.3104H30.396V33.6896ZM60.3296 29.74C58.3004 29.74 56.3167 30.3417 54.6294 31.4691C52.9422 32.5965 51.6272 34.1989 50.8506 36.0737C50.074 37.9484 49.8709 40.0114 50.2667 42.0016C50.6626 43.9919 51.6398 45.82 53.0747 47.2549C54.5096 48.6898 56.3377 49.667 58.328 50.0628C60.3182 50.4587 62.3812 50.2556 64.2559 49.479C66.1307 48.7024 67.7331 47.3874 68.8605 45.7001C69.9879 44.0129 70.5896 42.0292 70.5896 40C70.5864 37.2798 69.5044 34.672 67.581 32.7486C65.6576 30.8251 63.0497 29.7432 60.3296 29.74ZM60.3296 46.3104C59.0815 46.3104 57.8615 45.9403 56.8237 45.2469C55.786 44.5535 54.9772 43.568 54.4996 42.4149C54.0219 41.2618 53.897 39.993 54.1405 38.7689C54.3839 37.5448 54.9849 36.4204 55.8675 35.5379C56.75 34.6553 57.8744 34.0543 59.0985 33.8108C60.3226 33.5674 61.5914 33.6923 62.7445 34.1699C63.8976 34.6476 64.8831 35.4564 65.5765 36.4941C66.2699 37.5319 66.64 38.7519 66.64 40C66.6375 41.6728 65.9718 43.2764 64.7889 44.4593C63.606 45.6422 62.0024 46.3079 60.3296 46.3104ZM107.305 29.74C105.276 29.7398 103.292 30.3414 101.604 31.4687C99.9171 32.596 98.6019 34.1983 97.8252 36.0731C97.0485 37.9479 96.8453 40.0108 97.2411 42.0011C97.6368 43.9914 98.614 45.8197 100.049 47.2546C101.484 48.6896 103.312 49.6668 105.302 50.0628C107.292 50.4587 109.355 50.2556 111.23 49.4791C113.105 48.7025 114.707 47.3875 115.835 45.7002C116.962 44.013 117.564 42.0293 117.564 40C117.561 37.28 116.479 34.6723 114.556 32.7489C112.632 30.8255 110.025 29.7434 107.305 29.74ZM107.305 46.3104C106.057 46.3105 104.837 45.9406 103.799 45.2473C102.761 44.554 101.952 43.5685 101.474 42.4154C100.996 41.2624 100.871 39.9935 101.115 38.7694C101.358 37.5452 101.959 36.4208 102.842 35.5381C103.724 34.6555 104.848 34.0545 106.073 33.8109C107.297 33.5673 108.566 33.6923 109.719 34.1699C110.872 34.6475 111.857 35.4563 112.551 36.494C113.244 37.5318 113.614 38.7519 113.614 40C113.612 41.6727 112.946 43.2762 111.764 44.459C110.581 45.6419 108.978 46.3076 107.305 46.3104ZM83.8168 29.74C81.7876 29.74 79.8039 30.3417 78.1166 31.4691C76.4294 32.5965 75.1144 34.1989 74.3378 36.0737C73.5612 37.9484 73.3581 40.0114 73.7539 42.0016C74.1498 43.9919 75.127 45.82 76.5619 47.2549C77.9968 48.6898 79.8249 49.667 81.8152 50.0628C83.8054 50.4587 85.8684 50.2556 87.7431 49.479C89.6179 48.7024 91.2203 47.3874 92.3477 45.7001C93.4751 44.0129 94.0768 42.0292 94.0768 40C94.0736 37.2798 92.9916 34.672 91.0682 32.7486C89.1448 30.8251 86.5369 29.7432 83.8168 29.74ZM83.8168 46.3104C82.654 46.311 81.5136 45.9902 80.5216 45.3836C79.5295 44.777 78.7244 43.908 78.195 42.8727C77.6657 41.8373 77.4327 40.6759 77.5218 39.5164C77.6109 38.357 78.0186 37.2448 78.7 36.3025C79.3813 35.3602 80.3098 34.6245 81.3828 34.1766C82.4559 33.7286 83.6319 33.5859 84.781 33.7642C85.9301 33.9424 87.0076 34.4347 87.8945 35.1867C88.7815 35.9387 89.4434 36.9212 89.8072 38.0256H83.8168V41.9744H89.8072C89.3905 43.2346 88.5876 44.3317 87.5124 45.11C86.4371 45.8883 85.1442 46.3083 83.8168 46.3104Z" fill="#9097AA"></path></svg>
        </div>
        <div className='border border-gray-100 p-5 md:p-10'>
            <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" width="143" height="80" viewBox="0 0 143 80" fill="none"><path d="M37.432 33.1121H39.032V44.2481H43.832V45.8481H37.432V33.1121ZM48.816 33.1121C49.7654 33.1121 50.6934 33.3936 51.4827 33.921C52.2721 34.4484 52.8873 35.1981 53.2506 36.0752C53.6139 36.9523 53.709 37.9174 53.5238 38.8485C53.3386 39.7796 52.8814 40.6349 52.2101 41.3062C51.5388 41.9775 50.6835 42.4346 49.7524 42.6198C48.8213 42.805 47.8562 42.71 46.9791 42.3467C46.102 41.9834 45.3524 41.3682 44.825 40.5788C44.2975 39.7894 44.016 38.8614 44.016 37.9121C44.016 37.2817 44.1402 36.6575 44.3814 36.0752C44.6226 35.4928 44.9762 34.9637 45.4219 34.5179C45.8676 34.0722 46.3968 33.7187 46.9791 33.4774C47.5615 33.2362 48.1857 33.1121 48.816 33.1121ZM48.816 41.1121C49.4489 41.1121 50.0676 40.9244 50.5938 40.5728C51.1201 40.2211 51.5302 39.7214 51.7724 39.1366C52.0146 38.5519 52.078 37.9085 51.9545 37.2878C51.831 36.667 51.5263 36.0968 51.0787 35.6493C50.6312 35.2018 50.061 34.897 49.4403 34.7735C48.8196 34.6501 48.1761 34.7134 47.5914 34.9556C47.0067 35.1978 46.5069 35.608 46.1553 36.1342C45.8037 36.6605 45.616 37.2792 45.616 37.9121C45.6202 38.758 45.9592 39.5678 46.5589 40.1645C47.1586 40.7611 47.9701 41.0961 48.816 41.0961V41.1121ZM45.616 44.2641H52.016V45.8641H45.616V44.2641ZM66.096 45.8641H64.496V44.7201C63.4642 45.4423 62.2355 45.8305 60.976 45.8321C59.902 45.8392 58.8435 45.576 57.8979 45.0667C56.9524 44.5573 56.1502 43.8182 55.5653 42.9173C54.9805 42.0165 54.6317 40.983 54.5512 39.912C54.4707 38.841 54.661 37.767 55.1046 36.7888C55.5482 35.8107 56.2308 34.9599 57.0896 34.3149C57.9483 33.6699 58.9556 33.2514 60.0186 33.0979C61.0816 32.9444 62.1661 33.0609 63.1723 33.4367C64.1784 33.8124 65.0738 34.4354 65.776 35.2481L64.6 36.2961C64.066 35.699 63.3909 35.245 62.6365 34.9756C61.8821 34.7062 61.0723 34.6299 60.2808 34.7537C59.4893 34.8774 58.7414 35.1973 58.1052 35.6841C57.4691 36.171 56.9648 36.8093 56.6385 37.5409C56.3122 38.2725 56.1742 39.0742 56.2371 39.8728C56.3 40.6714 56.5617 41.4416 56.9985 42.1131C57.4352 42.7846 58.0331 43.3362 58.7377 43.7175C59.4422 44.0988 60.2309 44.2977 61.032 44.2961C61.6968 44.2974 62.3541 44.1552 62.9589 43.879C63.5636 43.6029 64.1016 43.1994 64.536 42.6961H60.216V41.0961H66.112L66.096 45.8641ZM71.984 33.1441C72.9333 33.1441 73.8614 33.4256 74.6507 33.953C75.4401 34.4804 76.0553 35.2301 76.4186 36.1072C76.7819 36.9843 76.877 37.9494 76.6918 38.8805C76.5066 39.8116 76.0494 40.6669 75.3781 41.3382C74.7068 42.0095 73.8515 42.4666 72.9204 42.6518C71.9893 42.837 71.0242 42.742 70.1471 42.3787C69.27 42.0154 68.5204 41.4002 67.9929 40.6108C67.4655 39.8214 67.184 38.8934 67.184 37.9441C67.1798 37.3097 67.3013 36.6807 67.5417 36.0936C67.782 35.5065 68.1363 34.9729 68.5842 34.5236C69.032 34.0742 69.5645 33.7181 70.1508 33.4759C70.7371 33.2336 71.3656 33.1099 72 33.1121L71.984 33.1441ZM71.984 41.1441C72.6169 41.1441 73.2356 40.9564 73.7618 40.6048C74.2881 40.2531 74.6982 39.7534 74.9404 39.1686C75.1826 38.5839 75.246 37.9405 75.1225 37.3198C74.999 36.699 74.6943 36.1288 74.2467 35.6813C73.7992 35.2338 73.229 34.929 72.6083 34.8055C71.9876 34.6821 71.3441 34.7454 70.7594 34.9876C70.1747 35.2298 69.6749 35.64 69.3233 36.1662C68.9717 36.6925 68.784 37.3112 68.784 37.9441C68.7966 38.7872 69.1415 39.5912 69.7438 40.1815C70.346 40.7717 71.1568 41.1004 72 41.0961L71.984 41.1441ZM68.784 44.2961H75.184V45.8961H68.784V44.2961ZM78.488 33.1121H80.088V45.8321H78.488V33.1121ZM82.304 33.1121H83.904C83.9864 33.1033 84.0696 33.1033 84.152 33.1121C84.8221 33.0394 85.5 33.1086 86.1415 33.3153C86.7831 33.522 87.3739 33.8614 87.8756 34.3116C88.3772 34.7618 88.7784 35.3125 89.0531 35.9281C89.3277 36.5436 89.4697 37.21 89.4697 37.8841C89.4697 38.5581 89.3277 39.2245 89.0531 39.8401C88.7784 40.4556 88.3772 41.0064 87.8756 41.4565C87.3739 41.9067 86.7831 42.2462 86.1415 42.4528C85.5 42.6595 84.8221 42.7288 84.152 42.6561H83.904V45.8561H82.304V33.1121ZM83.904 34.7121V41.0401H84.152C84.6039 41.1002 85.0635 41.0632 85.4999 40.9313C85.9363 40.7994 86.3395 40.5759 86.6825 40.2755C87.0255 39.9752 87.3004 39.605 87.4887 39.1898C87.677 38.7746 87.7744 38.324 87.7744 37.8681C87.7744 37.4122 87.677 36.9615 87.4887 36.5463C87.3004 36.1311 87.0255 35.7609 86.6825 35.4606C86.3395 35.1603 85.9363 34.9367 85.4999 34.8048C85.0635 34.673 84.6039 34.6359 84.152 34.6961C84.0648 34.7051 83.979 34.7239 83.896 34.7521L83.904 34.7121ZM95.432 34.0321L94.248 34.9681C94.0437 34.7546 93.7828 34.6039 93.4958 34.5337C93.2089 34.4634 92.9078 34.4765 92.628 34.5715C92.3483 34.6664 92.1014 34.8392 91.9165 35.0696C91.7315 35.3 91.6162 35.5784 91.584 35.8721V36.0001C91.584 36.7041 92.072 37.1761 93.024 37.2401C96.688 37.4641 98.368 39.1841 98.368 41.4561V41.6001C98.2734 42.4993 97.9225 43.3524 97.3571 44.058C96.7916 44.7635 96.0354 45.2919 95.1784 45.5801C94.3213 45.8683 93.3996 45.9042 92.5227 45.6837C91.6458 45.4632 90.8507 44.9954 90.232 44.3361L91.456 43.3921C91.7409 43.6974 92.0888 43.9371 92.4756 44.0946C92.8624 44.2521 93.2788 44.3235 93.696 44.3041C94.4665 44.3447 95.223 44.086 95.8073 43.5822C96.3917 43.0783 96.7588 42.3682 96.832 41.6001V41.4881C96.832 39.3521 94.736 38.9601 92.92 38.7841C91.24 38.6241 90.032 37.5761 90.032 36.0641V36.0001C90.0912 35.2129 90.4505 34.4785 91.0355 33.9485C91.6206 33.4185 92.3868 33.1334 93.176 33.1521C93.5942 33.1397 94.0103 33.2152 94.3976 33.3737C94.7848 33.5321 95.1344 33.7701 95.424 34.0721L95.432 34.0321ZM104.632 44.2081C106.624 44.2081 108.2 42.0561 108.2 39.4081V33.0081H109.8V39.4081C109.8 42.9281 107.496 45.7681 104.664 45.7681C101.832 45.7681 99.528 42.9281 99.528 39.4081V33.0081H101.128V39.4081C101.064 42.0961 102.64 44.2481 104.624 44.2481L104.632 44.2081ZM122.08 45.8081H120.48V37.8881L116.792 42.6881L113.104 37.8881V45.8321H111.504V33.1121L116.784 40.0641L122.064 33.1121L122.08 45.8081Z" fill="#9097AA"></path><path d="M29.752 31.2C29.752 30.0458 29.2935 28.9389 28.4773 28.1227C27.6611 27.3065 26.5542 26.848 25.4 26.848C24.2458 26.848 23.1388 27.3065 22.3226 28.1227C21.5065 28.9389 21.048 30.0458 21.048 31.2V44.36L24.632 46.928V53.184H26.168V46.928L29.752 44.36V31.2ZM28.216 38.56L26.168 40.608V38.688L28.216 36.64V38.56ZM22.616 36.64L24.664 38.688V40.608L22.616 38.56V36.64ZM28.216 34.464L25.4 37.28L22.584 34.4V32.48L25.4 35.296L28.216 32.48V34.464ZM25.4 28.384C26.0193 28.3868 26.6206 28.5924 27.1119 28.9696C27.6032 29.3467 27.9573 29.8744 28.12 30.472L25.4 33.184L22.68 30.472C22.8367 29.8685 23.1883 29.3336 23.6801 28.9503C24.1719 28.5669 24.7764 28.3567 25.4 28.352V28.384ZM22.584 43.584V40.704L24.632 42.752V45.04L22.584 43.584ZM26.168 45.048V42.752L28.216 40.704V43.576L26.168 45.048Z" fill="#9097AA"></path></svg>
        </div>
        <div className='border border-gray-100 p-5 md:p-10'>
            <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" width="143" height="80" viewBox="0 0 143 80" fill="none"><path d="M71.6264 44.2992H67.5304V33.3488H71.6264V44.2992ZM67.9304 43.8992H71.2264V33.7488H67.9304V43.8992ZM77.3256 44.2992H73.312V33.3488H81.6976C82.8989 33.2515 84.0952 33.5888 85.0688 34.2992C85.4879 34.6826 85.8128 35.1577 86.018 35.6874C86.2233 36.2171 86.3033 36.7871 86.252 37.3528C86.3118 38.3304 86.0007 39.2945 85.3808 40.0528C84.6472 40.8944 83.4264 41.328 81.7528 41.3432C81.3312 41.3544 78.172 41.3432 77.328 41.3432L77.3256 44.2992ZM73.7096 43.8992H76.9256V40.9392H77.1264C77.1672 40.9392 81.2688 40.952 81.7432 40.9392C83.3024 40.9256 84.4232 40.5392 85.0784 39.7848C85.6302 39.0988 85.9043 38.2305 85.8464 37.352C85.8956 36.8451 85.8274 36.3337 85.647 35.8574C85.4667 35.3811 85.179 34.9528 84.8064 34.6056C83.9037 33.9577 82.7992 33.6535 81.692 33.748H73.712L73.7096 43.8992ZM80.848 38.8832H76.8984V35.9024H80.8744C81.1562 35.8634 81.4434 35.8963 81.7091 35.998C81.9748 36.0997 82.2105 36.2669 82.3944 36.484C82.5612 36.7615 82.6399 37.0832 82.62 37.4064C82.635 37.7065 82.5701 38.0052 82.432 38.272C82.2423 38.5007 81.997 38.6768 81.7196 38.7832C81.4421 38.8897 81.142 38.923 80.848 38.88V38.8832ZM77.2984 38.4832H80.848C81.504 38.4832 81.9104 38.3464 82.0904 38.0648C82.1895 37.8601 82.2344 37.6334 82.2208 37.4064C82.2383 37.168 82.1866 36.9297 82.072 36.72L82.0672 36.7128C81.8768 36.4328 81.4984 36.3024 80.8744 36.3024H77.2984V38.4832ZM93.552 44.4608C89.96 44.4608 87.816 43.5688 86.9992 41.7344C86.8656 41.3801 86.7748 41.0111 86.7288 40.6352L86.6936 40.4048H90.9672L90.9952 40.5728C91.0281 40.7434 91.1004 40.9039 91.2064 41.0416C91.3752 41.2456 91.9384 41.588 93.8072 41.588C96.0536 41.588 96.0536 41.1936 96.0536 40.9816C96.0536 40.624 95.7936 40.5016 93.9616 40.3064L93.6136 40.2736C92.924 40.2088 92.052 40.1264 91.6536 40.092C88.2936 39.788 86.7936 38.744 86.7936 36.708C86.7936 34.5696 89.3464 33.188 93.2976 33.188C96.5208 33.188 98.5976 34.0376 99.4688 35.7152C99.6755 36.1054 99.8143 36.528 99.8792 36.9648L99.9072 37.1896H95.6288L95.6112 37.0088C95.5945 36.8675 95.534 36.7349 95.4384 36.6296C95.2784 36.4152 94.7728 36.0608 93.2032 36.0608C91.276 36.0608 91.0104 36.3072 91.0104 36.5728C91.0104 36.9272 91.6192 37.0528 93.5704 37.2616C94.384 37.328 95.692 37.4624 96.14 37.5168C98.9568 37.8224 100.214 38.8408 100.214 40.82C100.214 42.48 99.0584 44.4608 93.552 44.4608ZM87.1608 40.8048C87.2009 41.0686 87.2699 41.3272 87.3664 41.576C88.1104 43.2472 90.1344 44.0608 93.552 44.0608C96.4096 44.0608 99.8168 43.5008 99.8168 40.82C99.8168 39.0656 98.7048 38.1968 96.0976 37.9144C95.6496 37.86 94.3496 37.7264 93.5376 37.6592C91.4576 37.4336 90.612 37.3136 90.612 36.5728C90.612 35.8064 91.5232 35.6608 93.2048 35.6608C94.5336 35.6608 95.392 35.9008 95.756 36.3848C95.8553 36.504 95.9303 36.6415 95.9768 36.7896H99.444C99.3742 36.4802 99.2639 36.1813 99.116 35.9008C98.316 34.3656 96.3616 33.588 93.2992 33.588C89.5912 33.588 87.1952 34.8128 87.1952 36.708C87.1952 38.516 88.54 39.4088 91.6904 39.6936C92.0904 39.728 92.9616 39.8104 93.6528 39.876L94.0032 39.9088C95.7048 40.088 96.4552 40.2 96.4552 40.9816C96.4552 41.8232 95.4848 41.988 93.8088 41.988C92.2584 41.988 91.2792 41.7552 90.9008 41.2968C90.7841 41.1506 90.6962 40.9837 90.6416 40.8048H87.1608ZM107.814 44.4472C103.638 44.4472 101.334 42.7584 101.334 39.6912V33.3488H105.375V39.6912C105.375 40.7432 106.317 41.3464 107.958 41.3464C109.526 41.3464 110.499 40.7168 110.499 39.7048V33.3488H114.499V40.0272C114.503 42.836 112.064 44.4472 107.811 44.4472H107.814ZM101.734 33.7488V39.6912C101.734 43.4816 105.54 44.0472 107.814 44.0472C110.164 44.0472 114.106 43.5248 114.106 40.0272V33.7488H110.906V39.7048C110.906 40.9448 109.75 41.7464 107.964 41.7464C106.097 41.7464 104.982 40.9784 104.982 39.6912V33.7488H101.734ZM131.45 44.2992H127.635V39.3552L125.472 44.2992H122.145L120.004 39.3648V44.2992H116.176V33.3488H121.211L123.827 39.3864L126.57 33.3488H131.454L131.45 44.2992ZM128.035 43.8992H131.05V33.7488H126.824L123.814 40.372L120.946 33.7488H116.573V43.8992H119.601V37.44L122.401 43.9016H125.201L128.03 37.4496L128.035 43.8992ZM15.9152 33.5488H12.272V44.0992H22.3392V41.2904H15.9152V33.5488ZM29.6928 33.3088C25.0424 33.3088 22.5968 35.5128 22.5968 38.7488C22.5968 42.4048 25.164 44.2592 29.6928 44.2592C34.6784 44.2592 36.7752 42.1088 36.7752 38.7488C36.7752 35.3368 34.4096 33.3072 29.6928 33.3072V33.3088ZM29.6792 36.0504C29.9958 36.0489 30.3121 36.0673 30.6264 36.1056L26.5536 40.1784C26.3608 39.7425 26.2669 39.2693 26.2784 38.7928C26.2784 37.1376 27.112 36.0488 29.6792 36.0488V36.0504ZM29.6928 41.5608C29.3878 41.5621 29.083 41.545 28.78 41.5096L32.86 37.4296C33.0456 37.8583 33.1343 38.3227 33.12 38.7896C33.12 40.4 32.352 41.5592 29.6928 41.5592V41.5608ZM43.9936 40.1208H47.7432C47.688 40.381 47.573 40.6248 47.4072 40.8328C46.6299 41.4661 45.6377 41.7743 44.6384 41.6928C44.1354 41.7466 43.6267 41.6917 43.1468 41.5317C42.6668 41.3717 42.2269 41.1104 41.8568 40.7656C41.4777 40.2095 41.2976 39.5417 41.3456 38.8704C41.2843 38.167 41.4801 37.4652 41.8968 36.8952C42.4208 36.3032 43.308 36.048 44.612 36.048C45.4417 35.9793 46.2704 36.1924 46.964 36.6528C47.1826 36.8264 47.3461 37.0599 47.4344 37.3248H50.912C50.8867 36.8884 50.7818 36.4602 50.6024 36.0616C49.7696 34.368 47.8336 33.36 44.5416 33.36C41.6784 33.36 39.7568 34.2336 38.6952 35.5512C37.9941 36.5027 37.6342 37.6627 37.6736 38.844C37.6283 40.052 37.9788 41.2417 38.672 42.232C39.7208 43.592 41.5888 44.2608 43.8336 44.2608C45.326 44.3649 46.8082 43.9469 48.0264 43.0784L48.1208 44.0992H51.0096V37.8496H43.9936V40.1208ZM59.2088 33.3064C54.5592 33.3064 52.1128 35.5104 52.1128 38.7464C52.1128 42.4024 54.6792 44.2568 59.2088 44.2568C64.1952 44.2568 66.292 42.1064 66.292 38.7464C66.292 35.3368 63.9264 33.3072 59.2088 33.3072V33.3064ZM59.196 36.048C59.5042 36.0471 59.8123 36.0647 60.1184 36.1008L56.0616 40.16C55.8749 39.7289 55.784 39.2624 55.7952 38.7928C55.792 37.1376 56.6288 36.0488 59.196 36.0488V36.048ZM59.2088 41.5584C58.8957 41.5597 58.5828 41.5415 58.272 41.504L62.3656 37.4096C62.5582 37.844 62.6503 38.3162 62.6352 38.7912C62.6368 40.4 61.872 41.5592 59.2088 41.5592V41.5584Z" fill="#9097AA"></path></svg>
        </div>
        <div className='border border-gray-100 p-5 md:p-10'>
            <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" width="143" height="80" viewBox="0 0 143 80" fill="none"><path d="M31.256 43.832H33.656V55.6H31.256V43.832Z" fill="#9097AA"></path><path d="M35.048 51.568C35.0464 50.7227 35.2956 49.896 35.7641 49.1924C36.2325 48.4888 36.8991 47.94 37.6796 47.6155C38.4601 47.2909 39.3193 47.2051 40.1485 47.3691C40.9777 47.533 41.7397 47.9392 42.3379 48.5364C42.9362 49.1335 43.3438 49.8947 43.5093 50.7236C43.6748 51.5525 43.5907 52.4119 43.2676 53.1929C42.9445 53.974 42.3969 54.6417 41.6942 55.1114C40.9915 55.5812 40.1652 55.832 39.32 55.832C38.7579 55.8384 38.2001 55.7325 37.6795 55.5206C37.1588 55.3087 36.6856 54.995 36.2878 54.5979C35.8899 54.2007 35.5753 53.7282 35.3624 53.2079C35.1495 52.6876 35.0426 52.1301 35.048 51.568ZM41.176 51.568C41.1665 51.2031 41.0497 50.8491 40.8401 50.5502C40.6305 50.2514 40.3375 50.021 39.9976 49.8878C39.6578 49.7547 39.2862 49.7247 38.9294 49.8017C38.5726 49.8786 38.2464 50.0591 37.9916 50.3204C37.7368 50.5818 37.5647 50.9125 37.4969 51.2712C37.4291 51.6298 37.4686 52.0005 37.6103 52.3369C37.7521 52.6732 37.9899 52.9603 38.294 53.1622C38.5981 53.3641 38.955 53.4718 39.32 53.472C39.5697 53.479 39.8182 53.4341 40.0497 53.3403C40.2813 53.2464 40.4908 53.1056 40.6652 52.9267C40.8396 52.7478 40.975 52.5347 41.063 52.3008C41.1509 52.067 41.1893 51.8174 41.176 51.568Z" fill="#9097AA"></path><path d="M53.24 47.536V55.2C53.24 57.912 51.12 59.056 48.976 59.056C48.2221 59.112 47.4672 58.9596 46.7942 58.6153C46.1211 58.271 45.5558 57.7481 45.16 57.104L47.224 55.912C47.3878 56.2421 47.6469 56.5154 47.9679 56.6966C48.2888 56.8777 48.6567 56.9583 49.024 56.928C49.2657 56.9682 49.5134 56.9525 49.748 56.8819C49.9827 56.8113 50.198 56.6877 50.3773 56.5208C50.5566 56.3538 50.6952 56.1479 50.7824 55.9189C50.8695 55.6899 50.9029 55.4439 50.88 55.2V54.456C50.5978 54.8031 50.2378 55.0789 49.8292 55.2609C49.4206 55.443 48.9748 55.5263 48.528 55.504C47.4417 55.504 46.3998 55.0724 45.6317 54.3043C44.8635 53.5361 44.432 52.4943 44.432 51.408C44.432 50.3216 44.8635 49.2798 45.6317 48.5116C46.3998 47.7435 47.4417 47.312 48.528 47.312C48.9746 47.2915 49.4197 47.3757 49.828 47.5576C50.2364 47.7395 50.5966 48.0143 50.88 48.36V47.56L53.24 47.536ZM50.88 51.408C50.896 51.0189 50.7952 50.6339 50.5906 50.3026C50.3861 49.9712 50.0871 49.7086 49.7321 49.5485C49.3771 49.3884 48.9824 49.3382 48.5986 49.4042C48.2148 49.4703 47.8596 49.6496 47.5785 49.9191C47.2975 50.1887 47.1035 50.5361 47.0214 50.9168C46.9394 51.2974 46.9731 51.6939 47.1182 52.0553C47.2633 52.4167 47.5132 52.7264 47.8357 52.9446C48.1582 53.1628 48.5386 53.2796 48.928 53.28C49.1822 53.2979 49.4373 53.2625 49.6769 53.1758C49.9165 53.0892 50.1354 52.9533 50.3193 52.777C50.5032 52.6006 50.6481 52.3877 50.7447 52.1519C50.8412 51.9161 50.8873 51.6627 50.88 51.408Z" fill="#9097AA"></path><path d="M54.624 51.568C54.6224 50.7227 54.8717 49.896 55.3401 49.1924C55.8086 48.4888 56.4752 47.94 57.2557 47.6155C58.0361 47.2909 58.8953 47.2051 59.7245 47.3691C60.5538 47.533 61.3157 47.9392 61.914 48.5364C62.5122 49.1335 62.9199 49.8947 63.0854 50.7236C63.2508 51.5525 63.1667 52.4119 62.8436 53.1929C62.5205 53.974 61.973 54.6417 61.2703 55.1114C60.5676 55.5812 59.7413 55.832 58.896 55.832C58.3339 55.8384 57.7762 55.7325 57.2555 55.5206C56.7348 55.3087 56.2617 54.995 55.8638 54.5979C55.4659 54.2007 55.1514 53.7282 54.9385 53.2079C54.7256 52.6876 54.6187 52.1301 54.624 51.568ZM60.752 51.568C60.7426 51.2031 60.6258 50.8491 60.4162 50.5502C60.2066 50.2514 59.9135 50.021 59.5737 49.8878C59.2338 49.7547 58.8622 49.7247 58.5054 49.8017C58.1486 49.8786 57.8224 50.0591 57.5676 50.3204C57.3128 50.5818 57.1408 50.9125 57.073 51.2712C57.0052 51.6298 57.0446 52.0005 57.1864 52.3369C57.3282 52.6732 57.566 52.9603 57.8701 53.1622C58.1741 53.3641 58.531 53.4718 58.896 53.472C59.1444 53.4767 59.3912 53.4302 59.6208 53.3354C59.8504 53.2405 60.0581 53.0994 60.2307 52.9207C60.4034 52.742 60.5373 52.5297 60.6243 52.297C60.7112 52.0642 60.7493 51.8161 60.736 51.568H60.752Z" fill="#9097AA"></path><path d="M64.28 45.376C64.28 45.0881 64.3654 44.8066 64.5254 44.5671C64.6854 44.3277 64.9128 44.1411 65.1788 44.0309C65.4449 43.9207 65.7376 43.8918 66.0201 43.948C66.3025 44.0042 66.5619 44.1429 66.7656 44.3465C66.9692 44.5501 67.1079 44.8096 67.164 45.092C67.2202 45.3744 67.1914 45.6672 67.0812 45.9332C66.971 46.1993 66.7844 46.4267 66.5449 46.5867C66.3055 46.7467 66.024 46.832 65.736 46.832C65.3505 46.8299 64.9814 46.6759 64.7088 46.4033C64.4362 46.1307 64.2821 45.7616 64.28 45.376ZM64.528 47.536H66.928V55.6H64.528V47.536Z" fill="#9097AA"></path><path d="M77.392 51.568C77.4211 52.101 77.3445 52.6346 77.1666 53.1379C76.9886 53.6412 76.7129 54.1043 76.3552 54.5007C75.9976 54.897 75.5651 55.2186 75.0826 55.4471C74.6001 55.6756 74.0772 55.8064 73.544 55.832C73.0964 55.8535 72.6494 55.7765 72.2348 55.6065C71.8201 55.4365 71.4477 55.1776 71.144 54.848V58.848H68.744V47.536H71.144V48.296C71.4477 47.9664 71.8201 47.7075 72.2348 47.5375C72.6494 47.3675 73.0964 47.2905 73.544 47.312C74.0765 47.3376 74.5987 47.4681 75.0807 47.6961C75.5626 47.9241 75.9947 48.245 76.3523 48.6405C76.7098 49.036 76.9857 49.4982 77.1642 50.0005C77.3426 50.5029 77.42 51.0356 77.392 51.568ZM74.992 51.568C74.9825 51.1925 74.8631 50.8281 74.6485 50.5198C74.4339 50.2115 74.1337 49.9729 73.7849 49.8336C73.4361 49.6943 73.0541 49.6603 72.6861 49.7359C72.3182 49.8115 71.9806 49.9934 71.715 50.259C71.4494 50.5246 71.2675 50.8622 71.1919 51.2301C71.1163 51.598 71.1503 51.98 71.2896 52.3288C71.429 52.6776 71.6675 52.9779 71.9758 53.1925C72.2841 53.4071 72.6485 53.5265 73.024 53.536C73.2861 53.5527 73.5486 53.513 73.7941 53.4198C74.0395 53.3266 74.2622 53.1819 74.4471 52.9955C74.632 52.809 74.7749 52.5852 74.8661 52.339C74.9573 52.0928 74.9948 51.8299 74.976 51.568H74.992Z" fill="#9097AA"></path><path d="M84.864 53.184C84.864 55.04 83.264 55.832 81.504 55.832C80.8009 55.8942 80.0953 55.7446 79.4779 55.4025C78.8606 55.0603 78.3598 54.5412 78.04 53.912L80.136 52.72C80.2211 53.011 80.4032 53.2641 80.652 53.4373C80.9009 53.6105 81.2015 53.6933 81.504 53.672C82.088 53.672 82.376 53.488 82.376 53.168C82.376 52.28 78.376 52.752 78.376 49.968C78.376 48.208 79.864 47.32 81.576 47.32C82.2077 47.3008 82.8331 47.4509 83.3873 47.7547C83.9415 48.0586 84.4044 48.5051 84.728 49.048L82.624 50.152C82.531 49.9407 82.3788 49.761 82.1856 49.6346C81.9925 49.5082 81.7668 49.4406 81.536 49.44C81.12 49.44 80.864 49.6 80.864 49.896C80.896 50.816 84.864 50.2 84.864 53.184Z" fill="#9097AA"></path><path d="M93.696 47.536V55.6H91.296V54.848C91.0168 55.1821 90.6625 55.4455 90.2621 55.6165C89.8617 55.7875 89.4264 55.8614 88.992 55.832C87.392 55.832 85.976 54.672 85.976 52.488V47.536H88.376V52.136C88.3549 52.332 88.3777 52.5303 88.4428 52.7164C88.5079 52.9026 88.6135 53.0718 88.7522 53.212C88.8908 53.3522 89.059 53.4598 89.2444 53.5269C89.4298 53.594 89.6278 53.619 89.824 53.6C90.704 53.6 91.32 53.088 91.32 51.944V47.536H93.696Z" fill="#9097AA"></path><path d="M107.568 50.6561V55.6001H105.168V50.8641C105.168 50.0641 104.776 49.5361 104.008 49.5361C103.24 49.5361 102.744 50.1041 102.744 51.0561V55.6001H100.344V50.8641C100.344 50.0641 99.96 49.5361 99.184 49.5361C98.408 49.5361 97.928 50.1041 97.928 51.0561V55.6001H95.528V47.5361H97.928V48.2801C98.1788 47.9515 98.5078 47.6908 98.8851 47.5217C99.2623 47.3527 99.6758 47.2806 100.088 47.3121C100.502 47.292 100.914 47.3794 101.284 47.5659C101.654 47.7523 101.97 48.0315 102.2 48.3761C102.468 48.0158 102.822 47.7292 103.231 47.5431C103.639 47.3571 104.088 47.2776 104.536 47.3121C106.36 47.3121 107.568 48.6401 107.568 50.6561Z" fill="#9097AA"></path><path d="M109.616 47.4881C110.606 47.4881 111.408 46.6857 111.408 45.6961C111.408 44.7064 110.606 43.9041 109.616 43.9041C108.626 43.9041 107.824 44.7064 107.824 45.6961C107.824 46.6857 108.626 47.4881 109.616 47.4881Z" fill="#9097AA"></path><path d="M58.416 37.728C63.0508 37.728 66.808 33.9707 66.808 29.336C66.808 24.7012 63.0508 20.944 58.416 20.944C53.7812 20.944 50.024 24.7012 50.024 29.336C50.024 33.9707 53.7812 37.728 58.416 37.728Z" fill="#9097AA"></path><path d="M77.176 37.728C81.8108 37.728 85.568 33.9707 85.568 29.336C85.568 24.7012 81.8108 20.944 77.176 20.944C72.5412 20.944 68.784 24.7012 68.784 29.336C68.784 33.9707 72.5412 37.728 77.176 37.728Z" fill="#9097AA"></path><path d="M48.048 20.944H31.272V37.72H48.048V20.944Z" fill="#9097AA"></path></svg>
        </div>
      </div>
        </div>
    );
};

export default Customers;