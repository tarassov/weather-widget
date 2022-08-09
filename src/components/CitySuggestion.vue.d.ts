declare const _sfc_main: import("vue").DefineComponent<{
    city: {
        type: null;
        required: true;
    };
}, {
    props: {
        city: TCity;
    };
    emit: (e: "click", city: TCity) => void;
    onClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    city: {
        type: null;
        required: true;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
