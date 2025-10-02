const styles = {
    boxWidth: "xl:max-w-[1400px] w-full",
  
    heading: "font-GtStandard font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[60.8px] leading-[55.8px] w-full",
    paragraph: "font-rubik font-normal text-dimWhite text-[18px] leading-[30.8px]",
    heading2: "font-poppins font-[300] xs:text-[35px] text-[29px] text-white",
    heading3: "font-poppins font-[300] xs:text-[24px] text-[20px] text-white",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `grid md:grid-cols-2 grid-cols-1 items-center ${styles.paddingY}`,
    icono:'',
  };
  
  export default styles;