import { COLORS, FONTS, adjust } from "../constants/Theme";
import { font_size } from "../utils/helpers";

const styles = {
    homeContainer: {
        flex: 1,
        backgroundColor: COLORS.primaryBackgroundColor,
        padding: '16px',
        marginLeft: '5%',
    },
    topView: {
        borderBottomColor: '#F6F6F6',
        borderBottomWidth: '1px',
        paddingHorizontal: '16px',
        paddingVertical: '10px',
        backgroundColor: "#FFFFFF",
    },
    nameView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameDropDown: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameText: {
        ...FONTS.homeTitle,
        color: COLORS.primaryColor,
        marginRight: '5px',
    },
    heyText: {
        fontFamily: FONTS.homeTitle,
        color: COLORS.textColor,
    },
    welcomeText: {
        fontFamily: FONTS.iconText,
        color: COLORS.textColor,
        marginTop: '3px',
        fontSize: '13px',
        paddingBottom: '5px',
    },
    searchBarContainer: {
        marginTop: '8px',
    },
    mainContainer: {
        paddingHorizontal: '16px',
        paddingVertical: '16px',
    },
    createABHACard: {
        backgroundColor: COLORS.whiteColor,
        borderRadius: '8px',
        height: '145px',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '16px',
    },
    ABHACard: {
        backgroundColor: COLORS.whiteColor,
        borderRadius: '8px',
        height: '80px',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '16px',
    },
    createABHAVector: {
        height: '145px',
        width: '35%',
        borderTopLeftRadius: '8px',
        borderBottomLeftRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ABHAVector: {
        height: '80px',
        width: '20%',
        borderTopLeftRadius: '8px',
        borderBottomLeftRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    createABHAVectorView: {
        borderTopLeftRadius: '8px',
        borderBottomLeftRadius: '8px',
    },
    vectorView: {
        flex: 1.55,
    },
    abhaVectorView: {
        flex: 0.25,
    },
    cardTextView: {
        flex: 2.45,
        paddingVertical: '15px',
        paddingHorizontal: '10px',
    },
    abhaCardTextView: {
        flex: 0.75,
        paddingVertical: '15px',
        paddingRight: '10px',
    },
    createABHAImage: {
        height: '80px',
        width: '80px',
    },
    ABHAImage: {
        height: '45px',
        width: '45px',
    },
    createABHAText: {
        fontFamily: FONTS.homeTitle,
        color: COLORS.textColor,
        fontSize: '16px',
    },
    ABHAText: {
        fontFamily: FONTS.cardTitle,
        color: COLORS.textColor,
    },
    createABHAText2: {
        fontFamily: FONTS.iconText,
        fontSize: '13px',
        color: COLORS.placeholderColor,
        marginTop: '3px',
    },
    createNowButtonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    createNowButton: {
        borderRadius: '28px',
        backgroundColor: COLORS.primaryColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '10px',
        paddingVertical: '6px',
        alignSelf: 'flex-start',
        marginTop: '5px',
    },
    buttonTextStyle: {
        fontFamily: FONTS.cardTitle,
        color: COLORS.whiteColor,
    },
    ABHATextTop: {
        marginTop: '3px',
    },
    flatlistParentView: {
        paddingVertical: '12px',
        marginTop: '5px',
        backgroundColor: '#FCFCFC',
    },
    listTitle: {
        fontFamily: FONTS.headerTitle,
        fontSize: '24px',
        color: COLORS.textColor,
        marginHorizontal: '16px',
        marginBottom: '50px',
        fontWeight: 'bold',
    },
    listViewAll: {
        fontFamily: FONTS.homeTitle,
        fontSize: '16px',
        color: COLORS.primaryColor,
        marginHorizontal: '16px',
    },
    flatlist: {
        display: 'flex',
        flexDirection: 'coloumn',
        // flexWrap: 'wrap',
        // gap: '16px',
        // paddingHorizontal: '16px',
        marginTop: '5px',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        justifyContent: 'space-between'
    },
    flatlist2: {
        paddingHorizontal: '14px',
        marginTop: '5px',
        marginBottom: '55px',
    },
    flatlist3: {},
    bookingCard: {
        backgroundColor: '#FFFFFF',
        flex: '1 1 calc(50% - 16px)',
        height: '160px',
        padding: '12px',
        borderRadius: '12px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        margin: '8px 0',
    },
    specialtiesCard: {
      display: 'flex',
      backgroundColor: '#f5f5f5',
      justifyContent: 'space-between',
      flexDirection: 'column',
      border: '0px solid #e0e0e0',
      borderRadius: '8px',
      padding: '16px',
      cursor: 'pointer',
      transition: 'box-shadow 0.3s ease',
      marginBottom: '16px',
      width: 'calc(50% - 25px)', 
      height: 'calc(50% - 25px)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 0.9,
      elevation: 3,
      shadowColor: COLORS.blackColor,
      shadowOffset: {
        width: 0,
        height: 0.5,
      },
      shadowOpacity: 0.2,
      margin: '0 30px',
    },
    itemSeparator: {
        marginRight: '6px',
    },
    itemSeparator2: {
        width: '20px',
        height: '8px',
    },
    itemSeparator3: {},
    bookingCardTitleView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    bookingCardTitleView2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bookingTitle: {
        fontSize: '16px',
        color: '#2D2D2D',
        marginTop: '7px',
    },
    bookingTitle2: {
        fontSize: '16px',
        color: '#2D2D2D',
    },
    bookingDes: {
        fontSize: '13px',
        color: '#A3A3A3',
        marginTop: '8px',
    },
    bookingVectorView: {
        marginRight: '5px',
        flex: '0.2',
        display: 'flex',
        alignItems: 'flex-end',
    },
    bookingVectorView2: {
        flex: '0.2',
        display: 'flex',
        alignItems: 'flex-end',
    },
    bookingListImage: {
        width: '42px',
        height: '42px',
    },
    SpecialtiesListImage: {
        width: '24px',
        height: '24px',
    },
};

export default styles;
