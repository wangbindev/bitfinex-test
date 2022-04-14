import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { COLORS } from '../../../constants';
import { usePrevious } from '../../../hooks/usePrevious';

interface IListItem {
    index: number;
    data: any[];
    type: string;
}
export const ListItem = ({ type, data, index }: IListItem) => {
    const [bgColor, setBgColor] = useState<string | undefined>(undefined);
    const amount: any = Math.abs(data[2]);
    const prevAmount = usePrevious(amount);

    useEffect(() => {
        let isMounted = true;
        const changeBackground = () => {
            if (isMounted && prevAmount) {
                if (parseFloat(amount) > parseFloat(prevAmount)) {
                    setBgColor(index % 2 === 0 ? COLORS.blinkGreen : COLORS.blinkGreen1);
                } else {
                    setBgColor(index % 2 === 0 ? COLORS.blinkRed : COLORS.blinkRed1);
                }
                setTimeout(() => {
                    isMounted && setBgColor(undefined);
                }, 100);
            }
        };
        changeBackground();
        return () => {
            isMounted = false;
        };
    }, [amount, prevAmount, index, setBgColor]);
    return (
        <View
            style={[
                styles.constainer,
                {
                    backgroundColor:
                        bgColor ||
                        (index % 2 === 0 ? COLORS.transparent : COLORS.lightDark),
                },
            ]}
        >
            <Text style={styles.text}>
                {type == 'bids' ? amount : data[0]}
            </Text>
            <Text style={styles.text}>{type == 'bids' ? data[0] : amount}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    constainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 30,
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    text: {
        color: COLORS.text
    }
});
