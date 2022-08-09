import Button from "primevue/button";
declare const _sfc_main: import("vue").DefineComponent<{
    city: {
        type: null;
        required: true;
    };
    index: {
        type: NumberConstructor;
        required: true;
    };
}, {
    props: {
        city: TCity;
        index: number;
    };
    emit: (e: "remove_click", index: number) => void;
    cityProvider: {
        onRemove: (index: number) => void;
        onAdd: (city: TCity) => void;
    } | undefined;
    removeClick: () => void;
    Button: typeof Button;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "remove_click"[], "remove_click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    city: {
        type: null;
        required: true;
    };
    index: {
        type: NumberConstructor;
        required: true;
    };
}>> & {
    onRemove_click?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
