import React, { ReactElement, useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";
import { ChatTeardropDots } from "phosphor-react-native";
import { theme } from "../../theme";

import { styles } from "./styles";

const WidgetComponent: React.FC = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleOpen = (): void => {
    bottomSheetRef.current?.expand();
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        // backgroundStyle={styles.modal}
        // handleIndicatorStyle={styles.indicator}
      >
        {
          // feedbackSent
          // ?
          // <Success onSendAnotherFeedback={handleRestartFeedback} />
          // :
          // <>
          //   {
          //     feedbackType
          //     ?
          //     <Form
          //       feedbackType={feedbackType}
          //       onFeedbackCanceled={handleRestartFeedback}
          //       onFeedbackSent={handleFeedbackSent}
          //       onCloseFeedbackMenu={handleCloseFeedbackMenu}
          //     />
          //     :
          //     <Options onFeedbackTypeChange={handleFeedbackTypeChange} />
          //   }
          // </>
        }
      </BottomSheet>
    </>
  );
};

export const Widget = gestureHandlerRootHOC(WidgetComponent);
