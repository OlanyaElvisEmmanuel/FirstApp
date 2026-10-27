import React from 'react';
import { Text, View } from 'react-native'

function AppText({children}) {
    return <
        Text style={styles.text}>{children}</Text>
    
    ;
}
const styles = StyleSheet.create({
    text: {
        fontSize: 18,
         
    }
    
});

export default AppText;