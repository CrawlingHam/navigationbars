import { computed, type ComputedRef } from "vue";

/**
 * Creates a computed property that delegates all props except 'class'
 * @param props - The props object from defineProps
 * @returns A computed ref containing all props except 'class'
 */
const delegatedProps = <T extends Record<string, any>>(props: T): ComputedRef<Omit<T, "class">> => {
    return computed(() => {
        const { class: _, ...delegated } = props;
        return delegated as Omit<T, "class">;
    });
};

export { delegatedProps };
