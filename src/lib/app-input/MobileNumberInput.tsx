import { ImageSourcePropType, StyleSheet, View, TextInputProps, ViewStyle, TextInput } from 'react-native'
import React, { forwardRef, Ref, useState } from 'react'
import { UseControllerProps } from 'react-hook-form'
import { AppInput } from './index'
import { COLORS } from '../../utils/constants/colors'
import { AppText } from '../../components/AppText'
import { FONT_CONSTANTS, FONT_SIZE_CONSTANTS } from '../../utils/constants/fonts'
import ISDPicker from '../../components/ISDPicker'
import { defaultCountry, defaultFlag, defaultISD } from '../../components/ISDPicker/data'
import { COMMON_STYLE } from '../../utils/commonStyles'
import { AppPressable } from '../../components/AppPressable'

interface MobileNumberInputProps extends TextInputProps, UseControllerProps {
    label?: string
    name: string
    defaultValue?: string
    setFormError?: Function
    rightIcon?: ImageSourcePropType
    rightIconPress?: () => void;
    showLoading?: any;
    isdLabel?: any
    containerStyle?: ViewStyle;
    selectedIsd?: any;
    selectedIsdFlag?: any;
    countryCode?: any;
    onISDUpdate?: (isd: any, code: any) => void;
}

const MobileNumberInput = forwardRef((props: MobileNumberInputProps, ref: Ref<TextInput> | undefined) => {

    const [showISDPicker, setShowISDPicker] = useState(false);
    const [selectedIsdFlag, setSelectedIsdFlag] = useState(props?.selectedIsdFlag || defaultFlag);

    return (
        <View style={[styles.main, props?.containerStyle]}>
            <AppPressable onPress={() => setShowISDPicker(true)} style={styles.isd}>
                {props?.isdLabel && (<AppText style={styles.label}>{props?.isdLabel}</AppText>)}
                <View style={COMMON_STYLE.flex1}>
                    <AppText>{selectedIsdFlag}</AppText>
                </View>
            </AppPressable>
            <AppInput containerStyle={{ width: '75%' }} ref={ref} {...props} />
            <ISDPicker
                visible={showISDPicker}
                onDismiss={() => setShowISDPicker(false)}
                dial_code={props?.selectedIsd || defaultISD}
                country_code={props?.countryCode || defaultCountry}
                onChange={(isd, code, flag) => {
                    setSelectedIsdFlag(flag);
                    if (props.onISDUpdate) {
                        props.onISDUpdate(isd, code);
                    }
                }}
            />
        </View>
    )
});

export default MobileNumberInput

const styles = StyleSheet.create({
    main: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    },
    isd: {
        backgroundColor: COLORS.white_color,
        borderColor: COLORS.light_gray,
        borderWidth: 0.5,
        height: 55,
        paddingHorizontal: 14,
        paddingVertical: 6,
        marginBottom: 24,
        borderRadius: 6,
        width: "22%",
    },
    label: {
        color: COLORS.black,
        fontFamily: FONT_CONSTANTS.primary_medium_font,
        fontSize: FONT_SIZE_CONSTANTS.app_version_size,
    },
})

// Usage

/**
 * 
    <MobileNumberInput
        ref={null}
        name='mobile_number'
        placeholder='8011000000'
        keyboardType='numeric'
        isdLabel='Select'
        onISDUpdate={(isd, code) => {
            logOnConsole(isd, code)
        }}
        selectedIsd={defaultISD}
        countryCode={defaultCountry}
        returnKeyType='next'
        onChangeText={(value) => {
            logOnConsole(value)
        }}
    />
*/